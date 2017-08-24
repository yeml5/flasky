import {MESSAGE_FAILURE,MESSAGE_REQUEST,MESSAGE_SUCCESS} from './ActionConfig'
import axios from 'axios';

export function getMessage(pageNumber,dispatch,history) {
    dispatch(messageRequest());
    return axios.post('api/message', {page:pageNumber})
        .then(function (response) {
            console.log(response);
            dispatch(messageSuccess(response.));
        })
        .catch(function (error) {
            console.log(error);
            dispatch(messageFailure());
        });
}

export function messageRequest(){
    return {type:MESSAGE_REQUEST}
}

export function messageSuccess(message){
    return {type:MESSAGE_SUCCESS,message}
}

export function messageFailure(){
    return {type:MESSAGE_FAILURE}
}