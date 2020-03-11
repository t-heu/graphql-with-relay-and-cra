import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import ViewProfile from '../components/ViewProfile'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/profile" component={ViewProfile} />
      </Switch>
    </BrowserRouter>
  )
}
/*
<Route exact path="/" component={() => (<h1>gg</h1>)} />
<Route path="*" component={() => (<h1>404</h1>)} />
*/
export default Routes