import {SET_NAME} from '../constants/ActionTypes';
export function setUserName(name) {
    return {
        type: SET_NAME,
        payload: name
    };
}

