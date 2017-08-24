import {MESSAGE_FAILURE,
    MESSAGE_SUCCESS,
    MESSAGE_REQUEST} from '../actions/ActionConfig'

const initialState={
    messageRequesting:false,
    messageSuccess:false,
    message:null,
};

export function Message(state=initialState,action) {
    switch (action.type) {
        case MESSAGE_REQUEST:
            return {messageRequesting: true, messageSuccess: false};
        case MESSAGE_FAILURE:
            return {messageRequesting: false, messageSuccess: false};
        case MESSAGE_SUCCESS:
            return {messageRequesting: false, messageSuccess: true, message:action.message};
        default:
            return state;
    }
}