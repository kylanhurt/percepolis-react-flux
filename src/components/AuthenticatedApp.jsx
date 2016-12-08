'use strict';

import React from 'react';
import LoginStore from '../stores/LoginStore'
import { Route, RouteHandler, Link } from 'react-router';
import AuthService from '../services/AuthService'

export default class AuthenticatedApp extends React.Component {
  constructor() {
    super()
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  render() {
    return (
        <div className="row" style={{clear: "both"}}>
          <nav className="navbar navbar-inverse navbar-fixed-top" >
              <div className="container">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                          <span className="sr-only">Toggle navigation</span>
                      </button>
                      <a className="navbar-brand" href="#">Percepol.is</a>
                  </div>
                  <ul className="nav navbar-nav navbar-right">                         
                  {this.headerItems}
                  </ul>
                </div>
        </nav>
        <RouteHandler/>

        <div className="container col-lg-6 col-lg-offset-3">
          <footer>
              <p>&copy; Percepol.is 2016</p>
          </footer>
        </div>

      </div>
    );
  }

  logout(e) {
    e.preventDefault();
    AuthService.logout();
  }

  get headerItems() {
    if (!this.state.userLoggedIn) {
      return (
              <form className="navbar-form navbar-right">     
                  <div className="form-group">
                      <input type="email" className="form-control" id="login-email" />
                  </div>
                  <div className="form-group">
                      <input type="password" className="form-control" id="login-password" />
                  </div>
                  <button type="submit" className="btn btn-success">Login</button>
              </form>
            )
    } else {
      return (
          <li><a href="#" onClick="logout()" style="color:white;">Logout</a></li>
      )
    }
  }
}
