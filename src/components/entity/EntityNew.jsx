import React from 'react';
import EntityFormsy from './EntityFormsy';
//import EntityNewStore from '../../stores/EntityNewStore';
//import EntityNewActions from '../../actions/EntityNewActions';

export default class EntityNew extends React.Component { 
	constructor( props ) {
		console.log('inside EntityNew constructor');
		super(props)
	    this.state = {
	       entityNew: {},
           canSubmit: false,
           canPreSubmit: false,
           preSubmitData: {
           		valid: false
           }
	   };
	}

	saveEntityInfo() {

	}

	submitNewEntity(){

	}

    enablePreSubmitButton() {
      this.setState({
        canPreSubmit: true
      });
    }

    disablePreSubmitButton() {
      this.setState({
        canPreSubmit: false
      });
    }

    enableSubmitButton() {
      this.setState({
        canSubmit: true
      });
    }

    disableSubmitButton() {
      this.setState({
        canSubmit: false
      });
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

	_onChange() {

	}

	render() {
		return(
			<div className="main-form" style={{clear: "both"}}>
			    <h2>Entity Submission</h2>
			    <p>To start the creation and submission of a new entity, please fill out the form below:</p>
			    <form className="entity-submission-form" name="newEntitySubmissionForm">
			        <div className="initial-entity-name-submission">
			            <div className="form-group" className="test">
			                <label htmlFor="entityName">Entity Name:</label>
			                <input className="form-control" name="entityName" placeholder="eg. McDonald's" required></input>
			                <div className="form-messages-wrap">
			                    <div className={(!this.state.preSubmitData.valid ? 'hidden' : '')}>
			                        <span className="help-block"></span><br></br>
			                        <label className="text-danger">This field is required</label>
			                    </div>
			                </div>
			            </div>
				        <button type="submit" className="btn btn-success" onClick={this.submitNewEntity()} disabled={this.state.canPreSubmit ? '' : 'disabled'}>Submit New Entity</button>            
				        <button type="submit" className={"btn btn-info " + (this.state.canSubmit ? '' : 'hidden')} to="">Skip this Step</button>
			        </div>
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
			    <EntityFormsy />
			</div>			
		)
	}
}