import React from 'react'
import AuthService from '../services/AuthService'
import {Redirect, Route} from 'react-router-dom'

/**
 * Validate Access using simple auth
 *
 * @class
 * @param {React.Component} Component to be rendered
 * @param {Array<*>=} props of the component
 * @returns {React.Component} routed component or Login page
 */
export default function AuthRouter(Component, ...props) {
  return (
    <Route {...props} render={(props) => (
      AuthService.isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    )} />)
}
