import React from 'react';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService';
import linkState from 'react-link-state';

export default class Signup extends React.Component {

  constructor() {
    super()
    this.state = {
      user: '',
      password: ''
    };
  }

  signup(e) {
    e.preventDefault();
    Auth.signup(this.state.user, this.state.password)
      .catch(function(err) {
        console.log("Error logging in withAuth.signup (within Signup.signup)", err);
      });
  }

  render() {
    return (
      <div className="signup jumbotron center-block">
        <div className="col-lg-4 col-sm-12" id="home-signup-form">
          <form role="form" id="home-signup-form">
          <p>Please fill out the fields below to create an account:</p>        
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input type="email" valueLink={linkState(this, 'user')} className="form-control" id="username" placeholder="user@example.com" />
            <span className="help-block"></span> 
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" valueLink={linkState(this, 'password')} className="form-control" id="password" ref="password" placeholder="********" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.signup.bind(this)}>Submit</button>
        </form>
      </div>
      <div className="col-lg-6 col-lg-offset-2">
          <p>Become a dataGo member and you will be given access to the following features:</p>
            <ul>
                <li>Submit new entities for consideration and review by other users.</li>
                <li>Rate and review entities submitted by other users.</li>
                <li>Participate in discussions regarding organizations and current events.</li>
                <li>Begin accruing credibility as a user, giving your account more influence.</li>
            </ul>
      </div>      
    </div>
    );
  }
}