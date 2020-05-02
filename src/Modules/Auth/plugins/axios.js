import axios from 'axios'
import AuthService from '../services/AuthService'

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_API,
  timeout: 5000
});

// Interceptor all requests
instance.interceptors.request.use(config => {
  const token = AuthService.token

  if (!('Authorization' in config['headers']) && token) {
    config['headers']['Authorization'] = `Bearer ${token}`
  }

  if (!('Content-Type' in config['headers'])) {
    config['headers']['Content-Type'] = 'application/json'
  }

  return config
});

// Interceptor all responses
instance.interceptors.response.use(response => response.data, error => Promise.reject(error))

export default instance
