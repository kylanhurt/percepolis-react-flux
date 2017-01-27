import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FRC from 'formsy-react-components';
import EntityService from '../../services/EntityService';


//const { Form, Input, File, RadioGroup, Checkbox, CheckboxGroup, Select } = FRC;

export default class EntityFormsy extends React.Component {
  constructor( props ) {
    super(props);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);   
    this.enablePreSubmitButton = this.enablePreSubmitButton.bind(this);
    this.disablePreSubmitButton = this.disablePreSubmitButton.bind(this);   
    this.enableSubmitButton = this.enableSubmitButton.bind(this);
    this.disableSubmitButton = this.disableSubmitButton.bind(this);       
    this.submitNewEntity = this.submitNewEntity.bind(this);     
    this.state = {
     entityNew: {},
       canSubmit: false,
       canPreSubmit: false,
       preSubmitData: {
          valid: false
       }
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

  saveEntityInfo() {

  }

  enablePreSubmitButton() {
    this.state.canPreSubmit = true
  }

  disablePreSubmitButton() {
    this.state.canPreSubmit = false
  }

  enableSubmitButton() {
    this.state.canSubmit = true
  }

  disableSubmitButton() {
    this.state.canSubmit = false
  }    

  submit(model) {
    someDep.saveEmail(model.email);
  }

 componentWillMount() {
       
  }


  componentDidMount(){
 
  }

  componentWillUnmount() {

  }

  changeEntityName(event) {
    console.log('event.target is:', event.target);
    console.log('this is:', this);
    console.log('this.state is:', this.state);
  }

  _onChange() {
    if(this.entityName !== '') {
      console.log('_onChange this is: ', this);
      this.state.canPreSubmit = true;
    }
  }

  submitNewEntity(){
    console.log('in submitNewEntity fxn within EntityNewForm.jsx', 'this is:', this);
    //EntityService.create('email@email.com', 'sample entity')
  }

  render() {
    console.log('in EntityNewForm')
    return (
      <div className="entity-new-form-wrapper" style={{clear: "both"}}>
        <h2>Entity Submission</h2>
        <p>To start the creation and submission of a new entity, please fill out the form below:</p>
        <form onSubmit={this.submit} onValid={this.enableSubmitButton} onInvalid={this.disableSubmitButton} style={{clear: "both"}} ref="newEntitySubmit">
           <fieldset>
            <input label="Entity Name:" 
              min={1} 
              max={300} 
              layoutChoice="elementOnly" 
              rowClassName="col-lg-9" 
              onChange={this.changeEntityName} 
              labelClassName="col-lg-3" 
              name="entityName" 
              type="text" 
              placeholder="ex. McDonalds" 
              help="This is a required text input." 
              value={this.props.entityName}
              required/>
            <div className="clearfix"></div>
            <input name="presubmit-hidden" value="true" type="hidden" />
            <input type="submit" className="btn btn-success" onClick={this.submitNewEntity()} disabled={this.state.canPreSubmit ? ' ' : 'disabled'} defaultValue="Submit New Entity" />
            <input type="skip" className={"btn btn-info " + (this.state.canSubmit ? '' : 'hidden')} to="" defaultValue="Skip this Step" />
          </fieldset>
          {this.state.entityNew.preApproved ? (
          <div>
            <div className="subsequent-entity-info-submission">
                <h2>Additional Info:</h2>
                <div className="form-group">
                    <label htmlFor="entityWebsite">Official Website:</label>
                    <input className="form-control input-small" name="entityWebsite" placeholder="ex. www.MyCompany.com" type="url"></input>
                    <div className="form-messages-wrap">
                        <div>
                            <span className="help-block"></span><br></br>
                            <label className="text-danger">The URL you have entered is not valid. Please try again.</label>
                        </div>
                    </div>                
                </div>
                <div className="form-group">
                    <label htmlFor="entityDescription">A Short Description of the Entity: (max 500 characters)</label>
                    <textarea className="form-control span6" name="entityDescription" placeholder="This organization does ..."></textarea>
                    <div className="form-messages-wrap">
                        <div>
                            <span className="help-block"></span><br></br>
                            <label className="text-danger">This field is required</label>
                        </div>
                    </div>                
                </div>            
                <div className="form-group">
                    <label htmlFor="entityYearFounded">Year Founded:</label><br></br>
                    <input className="form-control" name="entityYearFounded" type="number" max="2016" placeholder="ex. 1956"></input>
                    <div className="form-messages-wrap">
                        <div>
                            <span className="help-block"></span><br></br>
                            <label className="text-danger">This field...</label>
                        </div>
                    </div>                
                </div>
                <div className="form-group">
                    <label htmlFor="entityCountryOrigin">Country of Origin:</label><br></br>
                    <country-select className="form-control span6" name="entityCountryOrigin" cs-priorities="US"></country-select>
                    <div className="form-messages-wrap">
                        <div>
                            <span className="help-block"></span><br></br>
                            <label className="text-danger">This field...</label>
                        </div>
                    </div>                
                </div>
                <div className="form-group">
                    <label htmlFor="entityIndustry">Industry:</label>
                    <input className="form-control" name="entityIndustry" placeholder="ex. Information Technology"></input>
                    <div className="form-messages-wrap">
                        <div>
                            <span className="help-block"></span><br></br>
                            <label className="text-danger">This field...</label>
                        </div>
                    </div>                
                </div>            
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.saveEntityInfo()}>Save</button>
          </div>
          ) : (
            <div></div>
          )}

        </form>
      </div>
    );
  }
};
