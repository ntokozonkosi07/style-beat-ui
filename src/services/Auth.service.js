import axios from "axios";
import qs from 'qs';

export const AUTH_KEY = "AUTH_KEY";
class Auth {
  isAuthenticated() {
    return false;
  }

  authenticate(email, password) {
    const payload = qs.stringify({ email, password, rememberMe: false});
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'};
    return axios.post('/style-beat/api/v1/auth/login', payload, headers)
  };

  registerUser(user) {
    return axios.post('/style-beat/api/v1/users', user);
  }
}

const auth = new Auth();
export {
  auth
}