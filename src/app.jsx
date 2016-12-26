import React from 'react';
import ReactDOM from 'react-dom'
import Router, {Route} from 'react-router';
import AuthenticatedApp from './components/AuthenticatedApp'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import EntityNew from './components/entity/EntityNew';
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/LoginActions';


var routes = (
  <Route handler={AuthenticatedApp}>
    <Route name="login" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="home" path="/" handler={Home}/>
    <Route name="entity-new" path="/entity/new" handler={EntityNew} />
  </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
  ReactDOM.render(<Handler />, document.getElementById('content'));
});

