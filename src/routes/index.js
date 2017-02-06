import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from '../containers';
import {HomeView, LoginView, ProtectedView} from '../views';
import {requireAuthentication} from '../components/AuthenticatedComponent';

export default(
    <Route path="/" component={App} >
    	<IndexRoute component={Home} />
	    <Route path="/login" component={Login} />
	    <Route path="/signup" component={Signup} />
	    <Route path="/entity/new" component={requireAuthentication(EntityFormsy)} />
    </Route>   
);
