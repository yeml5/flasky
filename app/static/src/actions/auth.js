import {LOGIN_USER_REQUEST,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGIN_TOGGLE_ON,
    LOGIN_TOGGLE_OFF,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE} from './ActionConfig'
import axios from 'axios';

export function loginUserRequest() {
    return {
        type:LOGIN_USER_REQUEST
    };
}

export function loginUserFailure(error) {
    return{
        type:LOGIN_USER_FAILURE,
    };
}

export function loginUserSuccess(token) {
    return {
        type:LOGIN_USER_SUCCESS,token
    }
}

export function loginUser(loginform,dispatch,history) {
            dispatch(loginUserRequest());
            return axios.post('api/get_token', {loginform: loginform})
                .then(response => {
                    try {
                        dispatch(loginUserSuccess(response.data));
                        history.push("/user");
                        console.log(response.data);
                        console.log(response.status);
                    } catch (e) {
                        alert(e);
                        dispatch(loginUserFailure({
                            response: {
                                status: 403,
                                statusText: 'Invalid token'
                            }
                        }));
                    }
                })
                .catch(error => {
                    dispatch(loginUserFailure());
                    console.log(error);
                });
}
export function loginToggle(set){
    return function (dispatch) {
        if (set){
            dispatch(loginToggleOn());
        }
        else{
            dispatch(loginToggleOff());
        }
    }
}

export function logoutUserRequest() {
    return {type:LOGOUT_USER_REQUEST}
}

export function logoutUserFailure(){
    return {type:LOGOUT_USER_FAILURE}
}

export function logoutUserSuccess(){
    return {type:LOGOUT_USER_SUCCESS}
}

export function logoutUser(dispatch,history) {
    dispatch(logoutUserRequest());
    return axios.get('api/logout')
        .then(response=>{
            try{
                dispatch(logoutUserSuccess());
                history.push('/login');
                console.log(response.data);
                console.log(response.status);}
            catch(e){
                dispatch(logoutUserFailure({
                    response: {
                        status: 403,
                        statusText: 'Invalid token'}
                }));}
            })
        .catch(error => {
            console.log(error);
            dispatch(logoutUserFailure());
                });
}

export function loginToggleOn(){
    return {type:LOGIN_TOGGLE_ON}
}
export function loginToggleOff(){
    return {type:LOGIN_TOGGLE_OFF}
}

export function registerUserRequest(){
    return {type:REGISTER_USER_REQUEST}
}

export function registerUserSuccess(){
    return {type:REGISTER_USER_SUCCESS}
}

export function registerUserFailure(){
    return{type:REGISTER_USER_FAILURE}
}

export function registerUser(registerdialog,dispatch){
    dispatch(registerUserRequest());
    return axios.post('api/register_user',{registerdialog:registerdialog})
        .then(response => {
                    try {
                        dispatch(registerUserSuccess());
                        console.log(response.data);
                        console.log(response.status);
                    } catch (e) {
                        alert(e);
                        dispatch(registerUserFailure({
                            response: {
                                status: 403,
                                statusText: 'Invalid token'
                            }
                        }));
                    }
                })
                .catch(error => {
                    dispatch(registerUserFailure());
                    console.log(error);
                });
}