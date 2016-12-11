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
                      <a className="navbar-brand" href="/">Percepol.is</a>
                  </div>                       
                  {this.headerItems}
                </div>
        </nav>
        <div className="col-lg-8 offset-2 main-content">
          <RouteHandler/>
        </div>
        <div className="container col-lg-8 col-lg-offset-2">
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
            <ul className="nav navbar-nav navbar-right"> 
              <li className="nav-item">
                <a className="nav-link" href="#/signup">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/login">Login</a>
              </li>         
            </ul>     
            )
    } else {
      return (
          <ul className="nav navbar-nav navbar-right">         
            <li><a href="#" onClick={this.logout.bind(this)} style={{color:'white'}}>Logout</a></li>
          </ul>
      )
    }
  }
}
