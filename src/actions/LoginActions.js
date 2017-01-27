import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants.js';
import RouterContainer from '../services/RouterContainer'
import {Router, browserHistory} from 'react-router'

export default {

  loginUser: (jwt) => {
    var savedJwt = localStorage.getItem('jwt');  
    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt
    });

    if (savedJwt !== jwt) {      
      var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
      localStorage.setItem('jwt', jwt);      
      browserHistory.push(nextPath);
    }
  },
  logoutUser: () => {
    localStorage.removeItem('jwt');    
    browserHistory.push('/');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
