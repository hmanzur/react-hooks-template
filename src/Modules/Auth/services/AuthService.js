import Axios from "axios"

export default class AuthService {
  static async login(username, password) {
    return Axios.post(process.env.REACT_APP_ENDPOINT_API + 'login', {username, password})
  }

  static signout() {
    localStorage.clear();
    AuthService.isAuthenticated = false
  }

  static saveToken(accessToken) {
    localStorage.setItem('app_access_token', accessToken)
    AuthService.init()
  }

  static init() {
    AuthService.token = localStorage.getItem('app_access_token')
    AuthService.isAuthenticated = !!AuthService.token
  }

  static isAuthenticated = false;

  static token = null;

  static user = null;
}
