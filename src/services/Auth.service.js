import axios from "axios";

export const AUTH_KEY = "AUTH_KEY"; 
class Auth {
  isAuthenticated() {
    return false;
  }

  registerUser(user) {
    return axios.post('/style-beat/api/v1/users', user);
  }
}

const auth = new Auth();
export {
  auth
}