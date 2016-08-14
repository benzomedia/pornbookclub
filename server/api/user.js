/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 16/06/2016
 * Time: 21:16
 */

const router = require('express').Router()
const mailer = require('../utils/mailer')
const models = require('../models')
const User = models.User
const r = models.r
var constants = require('../utils/constants')
var logger = require('../../logger');


// ====================================================
// GET AUTHENTICATED USER==============================
// ====================================================

router.get('/', function (req, res) {
    if (req.isAuthenticated()) {

        User.get(req.user.id).run().then(function (user) {
            res.json({user: user})
        }).error(handleError(res))

    }
    else
        res.json({})
})


// ====================================================
// CHECK USERNAME======================================
// ====================================================

router.post("/username", function (req, res) {

    User.filter({username: req.body.username}).run().then(function (users) {
        if (users.length == 0) {
            return res.status(200).send({isAvailable: true});
        } else {
            return res.status(200).send({isAvailable: false});
        }
    }).error(handleError(res))
})


// ====================================================
// UPDATE IMAGES=======================================
// ====================================================


router.post("/images", function (req, res) {

    User.get(req.user.id)
        .run()
        .then(function (user) {

            user.images = req.body.images

            user.save().then(function (user) {
                res.json({
                    user: user
                });
            }).error(handleError(res));

        }).error(handleError(res))
})


// ====================================================
// UPDATE USER=========================================
// ====================================================

router.post("/:userId", function (req, res) {

    User.get(req.params.userId)
        .run()
        .then(function (user) {
            if (req.body.user.username != null && req.body.user.username != "") {
                user.username = req.body.user.username
            }

            if (req.body.user.age != null) {
                user.age = req.body.user.age
            }


            if (req.body.user.gender != "") {
                user.gender = req.body.user.gender
            }

            if (req.body.user.ethnicity != "") {
                user.ethnicity = req.body.user.ethnicity
            }

            if (req.body.user.avatar != "") {
                user.avatar = req.body.user.avatar
            }

            if (req.body.user.quote != "") {
                user.quote = req.body.user.quote
            }

            user.save().then(function (user) {
                res.json({
                    user: user
                });
            }).error(handleError(res));

        }).error(handleError(res));

})


module.exports = router


function handleError(res) {
    return function (error) {
        console.log(error.message);
        return res.status(500).send({error: error.message});
    }
}