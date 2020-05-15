import { combineReducers } from 'redux';

// authentication token action & reducer
import { SET_AUTH_TOKEN, setAuthToken } from './auth.action';
import authToken from './auth.reducer';

export {
    SET_AUTH_TOKEN,
    setAuthToken
}
export default authToken;