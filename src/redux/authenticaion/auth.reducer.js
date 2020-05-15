
import { SET_AUTH_TOKEN } from './auth.action';

const authToken = (state = '', action) => {
    const { type } = action;
    
    switch(type){
        case SET_AUTH_TOKEN:
            return action.token;
        default:
            return state;
    }
}

export default authToken;