/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 25/07/2016
 * Time: 12:09
 */
import * as types from '../constants/actionTypes'
import axios from 'axios'
import mixpanel from 'mixpanel-browser'
import {push} from 'react-router-redux'
import {toggleMessage} from './message'



// =========================================================================
// LOGIN====================================================================
// =========================================================================

export function login(email, password) {
    return function (dispatch) {
        //Start action
        dispatch(requestLogin())

        //Send login request to server
        axios.post("/auth/login", {email, password}).then(function (response) {

            //track analytics
            //mixpanel.track('login', {role: response.data.user.role})
            //mixpanel.people.set_once('First Login Date', new Date());

            //dispatch success and navigate to projects screen
            dispatch(loginSuccessful())
            window.location.href="/index"


        }).catch(function (error) {
            dispatch(loginFailure(error))
        })

    }
}


// Request Login
function requestLogin() {
    return {
        type: types.REQUEST_LOGIN
    }
}


// Login successful
function loginSuccessful(user) {
    return {
        type: types.LOGIN_SUCCESS,
        user: user
    }
}


// Login failure
function loginFailure(response) {
    return function (dispatch) {
        console.log(response);
        dispatch(toggleMessage(response.data.error))
        return {
            type: types.LOGIN_FAILURE
        }
    }

}

// =========================================================================
// SIGNUP==================================================================
// =========================================================================

export function signup(role, username, email, password, verify_password) {

    return function (dispatch) {

        if (password != verify_password) {
            return dispatch(toggleMessage("Passwords don't match"));
        }

        dispatch(requestSignup())
        axios.post('/auth/signup', {
            username, email, password, role
        }).then(function (response) {
            if (response.data.success) {
                dispatch(signupSuccess())

                if(role == "actor"){
                    window.location.href = '/profile/edit'
                } else {
                    window.location.href = '/index'
                }

            } else {
                dispatch(toggleMessage(response.data.message));
                dispatch(signupFailure(response.data.message))
            }
        })
            .catch(function (error) {
                dispatch(toggleMessage(error));
                dispatch(signupFailure(error))
            });


    }
}

function requestSignup() {
    return {
        type: types.REQUEST_SIGNUP
    }
}

function signupSuccess() {
    return {
        type: types.SIGNUP_SUCCESS
    }
}

function signupFailure() {
    return {
        type: types.SIGNUP_FAILURE
    }
}



// =========================================================================
// RESET PASSWORD REQUEST===================================================
// =========================================================================

export function resetPasswordRequest(email) {
    return function (dispatch) {
        dispatch(requestResetPasswordRequest())

        axios.post('/auth/password',
            {email: email})
            .then((result)=> {
                if (result.data.success) {
                    dispatch(resetPasswordRequestSuccess())
                } else {
                    dispatch(toggleMessage(result.data.message))
                    dispatch(resetPasswordRequestFailure())
                }
            }).catch((error)=> {
            console.log("Reset Password Failed", error);
            dispatch(resetPasswordRequestFailure())
        });

    }
}

function requestResetPasswordRequest() {
    return {
        type: types.REQUEST_RESET_PASSWORD_REQUEST
    }
}

function resetPasswordRequestSuccess() {
    return {
        type: types.RESET_PASSWORD_REQUEST_SUCCESS
    }
}

function resetPasswordRequestFailure() {
    return {
        type: types.RESET_PASSWORD_REQUEST_FAILURE
    }
}


// =========================================================================
// RESET PASSWORD===========================================================
// =========================================================================

export function resetPassword(code, userId, password, verify_password) {
    return function (dispatch) {
        //Start action


        if (password !== verify_password) {
            return toggleMessage("Passwords don't match");
        }

        dispatch(requestResetPassword())
        axios.post('/auth/password/reset', {
            code,
            userId,
            password
        }).then(function (result) {
            if (result.data.success) {
                dispatch(requestResetPasswordSuccess(result))
            } else {
                dispatch(requestResetPasswordFailure(result.data.message))
            }
        }).catch(function (error) {
            dispatch(requestResetPasswordFailure(error))
        })

    }
}


function requestResetPassword() {
    return {
        type: types.REQUEST_RESET_PASSWORD
    }
}


function requestResetPasswordSuccess() {
    return {
        type: types.RESET_PASSWORD_SUCCESS,
    }
}


function requestResetPasswordFailure(error) {
    return function (dispatch) {

        dispatch(toggleMessage(error))
        return {
            type: types.RESET_PASSWORD_FAILURE,
        }
    }

}
