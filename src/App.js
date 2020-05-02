import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import AuthRouter from './Modules/Auth/mixins/AuthRouter'
import HomeView from './Modules/views/HomeView'
import SignInView from './Modules/Auth/views/SignInView'
import SignOutView from './Modules/Auth/views/SignOutView'
import AdminView from './Modules/Admin/views/AdminView'

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
