import {combineReducers} from 'redux';
import {Auth} from './auth';
import {Message} from './message'
import {reducer as formReducer} from 'redux-form'
import {LOGIN_USER_REQUEST,REGISTER_USER_REQUEST}from '../actions/ActionConfig'

const reducers=combineReducers({
    Auth
    , Message
    , form:formReducer.plugin({
        LoginForm:(state,action)=>{
            switch(action.type){
                case LOGIN_USER_REQUEST:
                    return undefined;
                default:
                    return state;
            }
        }
    ,RegisterDialog:(state,action)=>{
            switch(action.type){
                case REGISTER_USER_REQUEST:
                    return undefined;
                default:
                    return state;
            }
        }})
});

export default reducers;
