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
     entityNew: {
        entityName: {
          errors: false
        }
       },
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

  submitNewEntity(){

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

 componentWillMount() {
       
  }


  componentDidMount(){
 
  }

  componentWillUnmount() {

  }

  changeEntityName(event) {
    console.log('event.target.value is:', event.target.value);
    console.log('this is:', this);
    console.log('this.state is:', this.state);

    var currentValue = event.target.value;
    console.log('_onChange this is: ', this, 'currentValue is:', currentValue);

    if(currentValue !== '') {
      console.log('currentValue conditional true')
      this.setState({ canPreSubmit: true});
    } else {
      console.log('currentValue conditional false')
      this.setState({ canPreSubmit: false });
    }

  }

  _onChange() {

  }

  preSubmitNewEntity(e){
    console.log('in preSubmitNewEntity fxn within EntityNewForm.jsx this is:', this, 'e is:', e);
    e.preventDefault();
    EntityService.create('email@email.com', 'sample entity')
  }

  render() {
    console.log('in EntityFormsy')
    return (
      <div className="entity-new-form-wrapper" style={{clear: "both"}}>
        <h2>Entity Submission</h2>
        <p>To start the creation and submission of a new entity, please fill out the form below:</p>
        <form className="main-form" style={{clear: "both"}} ref="newEntitySubmit">
           <fieldset className="form-group">
            <label htmlFor="entityName">Entity Name:</label>
            <input label="Entity Name:" className="form-control" onChange={this.changeEntityName.bind(this)} name="entityName" type="text" placeholder="ex. McDonalds" required/>
            <div className="form-messages-wrap">
              {this.state.entityNew.entityName.errors ? (
                <div className="entityNameErrors">
                  <label class="text-danger">>This field is required.</label>
                </div>
              ) : <div></div>}
            </div>
            <input name="presubmit-hidden" value="true" type="hidden" />
            <button className="btn btn-success" onClick={this.preSubmitNewEntity} disabled={this.state.canPreSubmit ? '' : 'disabled'}>Submit New Entity</button>
            <button className={"btn btn-info " + (this.state.canSubmit ? '' : 'hidden')}>Skip this Step</button>
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
