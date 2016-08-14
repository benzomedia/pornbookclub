/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 28/07/2016
 * Time: 17:45
 */
import * as types from '../constants/actionTypes'

const defaultState = {
    avatar: null,
    cover: null,
    isUploading: false
}



function imageUpload(state = defaultState, action) {

    switch(action.type) {
        case(types.SET_PREVIEW_IMAGE):
            return {
                ...state,
                [action.name]: action.image
            }

        case(types.REQUEST_UPLOAD_IMAGE):
            return {
                ...state,
                [action.name]: action.image,
                isUploading: true
            }

        case(types.UPLOAD_IMAGE_SUCCESS):
            return {
                ...state,
                [action.name]: action.image,
                isUploading: false
            }

        case(types.UPLOAD_IMAGE_FAILURE):
            return {
                ...state,
                isUploading: false
            }

        default:
            return state
    }
}


export default imageUpload