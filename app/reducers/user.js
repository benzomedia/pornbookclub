/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 13/08/2016
 * Time: 09:45
 */

import * as types from '../constants/actionTypes'

const defaultState = {
    user: {},
    role: null,
    isLoading: false,
    usernameIsLoading: false,
    userNameAvailable: null
}

function user(state = defaultState, action) {
    switch (action.type) {

        case types.REQUEST_USER:
            return state

        case types.RECEIVE_USER:
            return {
                ...state,
                user: action.user
            }

        case types.RECEIVE_USER_FAILURE:
            return state

        case types.REQUEST_UPDATE_USER_PROFILE:
            return {
                ...state,
                user: action.user,
            }

        case types.UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state
            }

        case types.UPDATE_USER_PROFILE_FAILURE:
            return {
                ...state
            }

        case types.SET_ROLE:
            return {
                ...state,
                role: action.role,
            }

        case types.REQUEST_CHECK_USERNAME:
            return {
                ...state,
                usernameIsLoading: true
            }

        case types.CHECK_USERNAME_SUCCESS:
            return {
                ...state,
                userNameAvailable: action.isAvailable,
                usernameIsLoading: false
            }

        case types.CHECK_USERNAME_FAILURE:
            return {
                ...state,
                usernameIsLoading: false
            }

        case types.REQUEST_UPDATE_USER_IMAGES:
            return state


        case types.UPDATE_USER_IMAGES_SUCCESS:
            return {
                ...state,
                user: action.user
            }

        case types.UPDATE_USER_IMAGES_FAILURE:
            return state


        default:
            return state
    }
}

export default user