import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignIn from '../SignIn'
import SignUp from '../SignUp'
import View from '../View'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/dash" component={View} />
      </Switch>
    </BrowserRouter>
  )
}
/*
<Route exact path="/" component={() => (<h1>gg</h1>)} />
<Route path="*" component={() => (<h1>404</h1>)} />
*/
export default Routes