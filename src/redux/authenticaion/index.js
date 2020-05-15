import { combineReducers } from 'redux';

// authentication token action & reducer
import authReducer, { SET_AUTH_TOKEN, setAuthToken } from './auth.action';
import getAuthToken from './auth.reducer';

export {
    SET_AUTH_TOKEN,
    setAuthToken
}
export default combineReducers({
    getAuthToken
});