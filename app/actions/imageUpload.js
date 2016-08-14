/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 28/07/2016
 * Time: 17:41
 */
import * as types from '../constants/actionTypes'
import axios from 'axios'
import mixpanel from 'mixpanel-browser'
import {toggleMessage} from './message'


export function setPreviewImage(image = null, name) {
    return {
        type: types.SET_PREVIEW_IMAGE,
        image,
        name
    }
}


export function uploadImage(files, name) {
    return function (dispatch) {

        dispatch(requestUploadImage(files[0].preview, name))

        var data = new FormData();
        data.append('file', files[0]);
        data.append('type', name);

        axios.post('/file', data).then(function (response) {

            dispatch(uploadImageSuccess(response.data.url, name))

        }).catch(function (error) {

            console.log("upload image failure", error);
            dispatch(uploadImageFailure())

        })

    }
}



function requestUploadImage(image, name) {
    return {
        type: types.REQUEST_UPLOAD_IMAGE,
        image,
        name
    }
}




function uploadImageSuccess(image, name) {
    return {
        type: types.UPLOAD_IMAGE_SUCCESS,
        image,
        name
    }
}


function uploadImageFailure() {
    return {
        type: types.UPLOAD_IMAGE_FAILURE
    }
}