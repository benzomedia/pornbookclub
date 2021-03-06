/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 25/07/2016
 * Time: 12:09
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import auth from './auth'
import message from './message'
import imageUpload from './imageUpload'
import errors from './errors'
import user from './user'
import actors from './actors'

const rootReducer = combineReducers({
    auth,
    message,
    imageUpload,
    errors,
    user,
    actors,
    routing: routerReducer})


export default rootReducer