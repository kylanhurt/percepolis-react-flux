import React from 'react';
import EntityTableStore from '../stores/EntityTableStore';
import EntityTableActions from '../actions/EntityTableActions'

export default class EntityTable extends React.Component {

	constructor( props ) {
		console.log('inside EntityTable constructor');
		super(props)
	   this.state = {
	       entities: [],
	       start: "started"
	   };
		this._onChange = this._onChange.bind(this);  	     
	}

   componentWillReceiveProps(props) {
     console.log('ET.componentWillReceiveProps triggered');
     //this.setState({entities: EntityTableActions.receiveEntities()});
   }

   componentWillMount() {
     console.log('ET.componentWillMount triggered');
     EntityTableActions.loadEntities();              
    }


	componentDidMount(){
	   console.log('ET.componentDidMount triggered');
	   EntityTableStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		console.log('ET.componentWillUnmount triggered');
		EntityTableStore.removeChangeListener(this._onChange);
	}

	_onChange() {
     console.log('ET._onChange triggered, this.state is:', this.state);
     var test = EntityTableStore.getEntities();
     console.log('test is:', test);
     this.state.entities = EntityTableStore.getEntities();
     this.setState({entities: this.state.entities});
	}

  render() { 
  	return( 
  		<div className="row">
		    <table className="table table-striped table-hover home-index-table">
		        <thead>
		            <tr>
		                <th className="home-index-table-head-title">Name</th>
		                <th className="home-index-table-head-website">Website</th>
		                <th className="home-index-table-head-location">Location</th>
		                <th className="home-index-table-head-year">Year Founded</th>
		                <th className="home-index-table-head-created">Submitted</th>
		            </tr>
		        </thead>
		        <tbody>
            	{this.state.entities.map((entity, index) => (
          		<tr key={index}>
	                <td className="home-index-table-body-title"><a>{entity.title}</a></td>
	                <td className="home-index-table-body-website"><a href="http://{entity.website}">{entity.website}</a></td>                        
	                <td className="home-index-table-body-location">{entity.location}</td>
	                <td className="home-index-table-body-year">{entity.year_founded}</td>
	                <td className="home-index-table-body-created">{entity.created_at}</td>
                </tr>
          		))}
		        </tbody>
		    </table>
		 </div>	
	 	)  	
	}
}	