import {LOGIN_USER_REQUEST,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_REQUEST,
    LOGIN_TOGGLE_ON,
    LOGIN_TOGGLE_OFF} from '../actions/ActionConfig'

const initialState={
    isAuthenticating:false,
    isAuthenticated:true,
    islogouting:false,
    data:null,
};

export function Auth (state=initialState,action) {
    switch (action.type){
        case LOGIN_USER_REQUEST:
            return {isAuthenticating:true,isAuthenticated:false};
        case LOGIN_USER_FAILURE:
            return {isAuthenticating:false,isAuthenticated:false};
        case LOGIN_USER_SUCCESS:
            return {isAuthenticating:false,isAuthenticated:true,data:action.token};
        case LOGIN_TOGGLE_ON:
            return {isAuthenticating:false,isAuthenticated:true};
        case LOGIN_TOGGLE_OFF:
            return {isAuthenticating:false,isAuthenticated:false};
        case LOGOUT_USER_SUCCESS:
            return {isAuthenticated:false,islogouting:false,data:null};
        case LOGOUT_USER_REQUEST:
            return {islogouting:true};
        default:
            return state;
    }
}
