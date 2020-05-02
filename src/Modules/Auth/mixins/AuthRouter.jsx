import React from 'react'
import AuthService from '../services/AuthService'
import {Redirect, Route} from 'react-router-dom'

/**
 * Validate Access using simple Auth
 *
 * @class
 * @param {React.Component} component to be rendered
 * @param {Array<*>=} props of the component
 * @returns {React.Component} routed component or Login page
 */
export default function AuthRouter(component, ...props) {
  return (
    <Route {...props} render={(props) => (
      AuthService.isAuthenticated
        ? <component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    )} />)
}
