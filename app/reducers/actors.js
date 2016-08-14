/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 13/08/2016
 * Time: 16:15
 */
import * as types from '../constants/actionTypes'

const defaultState = {
    actors:[],
    isLoading: false
}

function actors(state = defaultState, action){

    switch(action.type){

        case types.REQUEST_GET_ACTORS:
            return {
                ...state,
                isLoading: true
            }

        case types.GET_ACTORS_SUCCESS:
            return {
                ...state,
                actors: action.actors,
                isLoading: false
            }

        case types.GET_ACTORS_FAILURE:
            return {
                ...state,
                isLoading: false
            }


        default:
            return state
    }

}

export default actors