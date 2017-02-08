import React from 'react';
import EntityNewForm from './EntityNewForm';
//import EntityNewStore from '../../stores/EntityNewStore';
//import EntityNewActions from '../../actions/EntityNewActions';
//import Formsy from 'formsy-react';

export default class EntityNew extends React.Component { 
	constructor( props ) {
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
			    <EntityNewForm />
			</div>			
		)
	}
}