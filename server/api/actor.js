/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 13/08/2016
 * Time: 16:28
 */

const router = require('express').Router()
const mailer = require('../utils/mailer')
const models = require('../models')
const User = models.User
const r = models.r
var constants = require('../utils/constants')
var logger = require('../../logger');


// ====================================================
// GET ACTORS==========================================
// ====================================================

router.get('/', function(req,res) {
        User.filter({role:"actor"}).run().then(function(actors){
            res.json({actors:actors})
        }).error(handleError(res))
})




module.exports = router


function handleError(res) {
    return function (error) {
        console.log(error.message);
        return res.status(500).send({error: error.message});
    }
}