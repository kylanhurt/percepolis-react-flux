import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import AuthenticatedApp from './components/AuthenticatedApp'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import EntityNew from './components/entity/EntityNew';
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/LoginActions';
import EntityFormsy from './components/entity/EntityFormsy';

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
};

ReactDOM.render((	
			<Router history={browserHistory}>
			    <Route path="/" component={AuthenticatedApp} >
			    	<IndexRoute component={Home} />
				    <Route path="/login" component={Login} />
				    <Route path="/signup" component={Signup} />
				    <Route path="/entity/new" component={EntityNew} />

			    </Route>
				    <Route path="/entity/formsy" component={EntityFormsy} />			    
			</Router>
), document.getElementById('content'))