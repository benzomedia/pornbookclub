/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 13/08/2016
 * Time: 16:14
 */
import * as types from '../constants/actionTypes'
import axios from 'axios'


// =========================================================================
// GET ACTORS===============================================================
// =========================================================================
export function getActors() {
    return function (dispatch) {
        dispatch(requestGetActors())

        axios.get('/api/actor').then(function(response){

            dispatch(getActorsSuccess(response.data.actors))

        }).catch(function(err){
            console.log("Get Actors Failed", err);
            dispatch(getActorsFailure(err))
        })

    }
}

function requestGetActors() {
    return {
        type: types.REQUEST_GET_ACTORS
    }
}

function getActorsSuccess(actors) {
    return {
        type: types.GET_ACTORS_SUCCESS,
        actors
    }
}

function getActorsFailure(err) {
    return {
        type: types.GET_ACTORS_FAILURE,
        err
    }
}