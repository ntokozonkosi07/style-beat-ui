import axios from "axios";

export const AUTH_KEY = "AUTH_KEY"; 
class Auth {
  isAuthenticated() {
    return true;
  }

  registerUser(user) {
    debugger;
    return axios.post('/style-beat/api/v1/users', user);
  }
}

const auth = new Auth();
export {
  auth
}