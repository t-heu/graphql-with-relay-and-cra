import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const SignIn = lazy(() => import('../components/SignIn'));
const SignUp = lazy(() => import('../components/SignUp'));
const ViewProfile = lazy(() => import('../components/ViewProfile'));
//import SignIn from '../components/SignIn'
//import SignUp from '../components/SignUp'
//import ViewProfile from '../components/ViewProfile'

function Routes() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/profile" component={ViewProfile} />
      </Switch>
      </Suspense>
    </Router>
  )
}

/*
<Route exact path="/" component={() => (<h1>gg</h1>)} />
<Route path="*" component={() => (<h1>404</h1>)} />
*/

export default Routes
