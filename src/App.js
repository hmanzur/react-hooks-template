import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import AuthRouter from './modules/auth/mixins/AuthRouter'
import HomeView from './modules/views/HomeView'
import SignInView from './modules/auth/views/SignInView'
import SignOutView from './modules/auth/views/SignOutView'
import AdminView from './modules/admin/views/AdminView'

/**
 * App primary Component
 *
 * @public
 * @returns {React.ReactNode} App
 */
function App() {
  // noinspection RequiredAttributes
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeView}/>
        <Route path="/login" exact component={SignInView} />
        <Route path="/logout" exact component={SignOutView} />
        <AuthRouter path="/admin/:site" exact component={AdminView}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
