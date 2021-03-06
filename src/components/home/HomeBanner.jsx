import React from 'react';
import LoginStore from '../../stores/LoginStore';
import AuthService from '../../services/AuthService';
import {Link} from 'react-router';
import EntityNewStore from '../../stores/EntityNewStore';

export default class HomeBanner extends React.Component {

	constructor( props ) {
		super(props)		
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

  _onInputChange(name, e) {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  loginUser(e) {
    e.preventDefault();
    AuthService.login(this.state.email, this.state.password)
    	.catch(function(err) {
    		console.log('There has been an error logging in.');
    	});

  }

  registerUser(e) {
	e.preventDefault();
    AuthService.signup(this.state.email, this.state.password)
		.catch(function(err) {
			console.log('There has been an error signing up.');
		});
  }

  _onChange() {
  	let currentLoginState = this._getLoginState();
  	this.setState(currentLoginState);
  }

  render() { 
    if (!this.state.userLoggedIn) {
    	return(
			<div className="jumbotron" style={{overflow: 'hidden'}}>
			    <div className="col-lg-4 col-sm-12" id="home-signup-form">
			        <form>
			            <p>Please fill out the fields below to create an account:</p>
			            <div className="form-group">
			                <label htmlFor="login-email">Email:</label>
			                <input type="email" className="form-control" onChange={this._onInputChange.bind(this, 'email')} id="login-email" placeholder="user@example.com"></input>
			                <span className="help-block"></span>                
			            </div>
			            <div className="form-group">
			                <label htmlFor="login-password">Password:</label>
			                <input type="password" className="form-control" onChange={this._onInputChange.bind(this, 'password')} id="login-password" placeholder="*******"></input>
			            </div>
			            <button className="btn btn-primary" onClick={this.loginUser.bind(this)}>Login</button>
			            <button className="btn btn-secondary" onClick={this.registerUser.bind(this)}>Register</button>
			            <input type="hidden" name="_token" value="{{_token}}"></input>
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
		)
	} else {
		return(
				<div id="home-logged-in-content" className="jumbotron">
				    <h1>Welcome to dataGo<span>, </span>!</h1>
				    <p>To submit a new entity to our database, please click the button below...</p>
				    <p><Link className="btn btn-primary btn-large" to="/entity/new">Submit New Entity</Link></p>
				</div>
			)
		}
	}
}	