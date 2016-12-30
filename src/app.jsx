import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import AuthenticatedApp from './components/AuthenticatedApp';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import EntityNew from './components/entity/EntityNew';
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/LoginActions';

ReactDOM.render((	
			<Router component={AuthenticatedApp} history={browserHistory}>
			    <Route path="login" component={Login} />
			    <Route path="signup" component={Signup} />
			    <Route path="/" component={Home} />
			    <Route path="entity/new" component={EntityNew} />
			</Router>
), document.getElementById('content'))

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}
