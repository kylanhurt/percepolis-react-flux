import React, { Component } from 'react'
import Formsy, {Form} from 'formsy-react'
import FormsyInput from '../FormsyInput'

export default class EntityFormsy extends React.Component {
  constructor( props ) {
    super(props);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);    
    this.state = {
      canSubmit: false
    }
    console.log('in entityformsy, this is: ', this)
  }

  submit(data) {
    alert(JSON.stringify(data, null, 4));
  }
  enableButton() {
    this.state.canSubmit = true;
  }
  disableButton() {
    this.state.canSubmit = false;
  }

  render() {
    return (
      <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
        <FormsyInput name="email" title="Email" validations="isEmail" validationError="This is not a valid email" required/>
        <FormsyInput name="password" title="Password" type="password"  required/>
        <div className="buttons">
          <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
        </div>
      </Formsy.Form>
    );
  }
};
