import { combineReducers } from 'redux';

import getAuthToken, { SET_AUTH_TOKEN, setAuthToken } from './authenticaion';

export {
    SET_AUTH_TOKEN, setAuthToken
}

export default combineReducers([
    getAuthToken
])