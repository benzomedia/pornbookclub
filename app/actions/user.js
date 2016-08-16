/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 13/08/2016
 * Time: 09:39
 */

import * as types from '../constants/actionTypes'
import axios from 'axios'
import mixpanel from 'mixpanel-browser'
import {push} from 'react-router-redux'
import {toggleMessage} from './message'
import store from '../store/configureStore'
import {setPreviewImage} from './imageUpload'

// =========================================================================
// GET USER=================================================================
// =========================================================================

export function getUser() {
    return function (dispatch) {
        dispatch(requestUser())

        axios.get('/api/user').then(function (response) {

            dispatch(receiveUser(response.data.user || {}))

            if(response.data.user != null){

                dispatch(setPreviewImage(response.data.user.avatar, 'avatar'))

                if(response.data.user.images != null) {
                    dispatch(setPreviewImage(response.data.user.images[0], 'cover'))
                }
            }

        }).catch(function (error) {
            dispatch(receiveUserFailure(error))
        })

    }

}


function requestUser() {
    return {
        type: types.REQUEST_USER
    }
}


function receiveUser(user) {
    return {
        type: types.RECEIVE_USER,
        user: user
    }
}


function receiveUserFailure(error) {
    console.log("failure receiving user. error:", error);
    return {
        type: types.RECEIVE_USER_FAILURE
    }
}

// =========================================================================
// UPDATE USER==============================================================
// =========================================================================

export function updateUserProfile(user) {
    return function (dispatch) {
        dispatch(requsetUpdateUserProfile(user))

        axios.post('/api/user/' + user.id, {user}).then(function () {

            dispatch(updateUserProfileSuccess())

            dispatch(push('/profile/edit/images'))

        }).catch(function (error) {
            console.log("User Update Failure ", error);
            dispatch(updateUserProfileFailure())
        })

    }
}

function requsetUpdateUserProfile(user) {
    return {
        type: types.REQUEST_UPDATE_USER_PROFILE,
        user
    }
}


function updateUserProfileSuccess() {
    return {
        type: types.UPDATE_USER_PROFILE_SUCCESS,
    }
}


function updateUserProfileFailure() {
    return {
        type: types.UPDATE_USER_PROFILE_FAILURE,
    }
}


// =========================================================================
// SET ROLE=================================================================
// =========================================================================

export function setRole(role){
    return{
        type: types.SET_ROLE,
        role
    }
}

// =========================================================================
// CHECK USERNAME===========================================================
// =========================================================================

export function checkUsername(username){
    console.log(username);
    return function(dispatch){
        dispatch(requsetCheckUsername())
        axios.post('/api/user/username',{username}).then(function(response){
            dispatch(usernameCheckSuccess(response.data.isAvailable))
        }).catch(function(err){
            console.log("Username check failed", err);
            dispatch(usernameCheckFailure())
        })
    }
}

function requsetCheckUsername() {
    return {
        type: types.REQUEST_CHECK_USERNAME
    }
}


function usernameCheckSuccess(isAvailable) {
    return {
        type: types.CHECK_USERNAME_SUCCESS,
        isAvailable: isAvailable
    }
}


function usernameCheckFailure() {
    return {
        type: types.CHECK_USERNAME_FAILURE
    }
}

// =========================================================================
// UPDATE USER IMAGES=======================================================
// =========================================================================

export function updateUserImages(images) {
    return function (dispatch) {
        dispatch(requsetUpdateUserImages())

        axios.post('/api/user/images/', {images}).then(function (user) {

            dispatch(updateUserImagesSuccess(user))
            window.location.href = '/index'

        }).catch(function (error) {
            console.log("Images Update Failure ", error);
            dispatch(updateUserImagesFailure())
        })

    }
}

function requsetUpdateUserImages() {
    return {
        type: types.REQUEST_UPDATE_USER_IMAGES,
    }
}


function updateUserImagesSuccess(user) {
    return {
        type: types.UPDATE_USER_IMAGES_SUCCESS,
        user
    }
}


function updateUserImagesFailure() {
    return {
        type: types.UPDATE_USER_IMAGES_FAILURE,
    }
}
