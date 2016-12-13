import React from 'react';
import EntityTableStore from '../stores/EntityTableStore';
import EntityTableActions from '../actions/EntityTableActions'

export default class EntityTable extends React.Component {

	constructor( props ) {
		console.log('inside EntityTable constructor');
		super(props)
		//this.state = EntityTableStore.getEntities();
		EntityTableActions.loadEntities();
	}

	componentDidMount(){
		this.init()

	}

	componentWillUnmount() {
		EntityTableStore.removeChangeListener(this._onChange);
	}

	_onChange() {
		this.setState(EntityTableStore.getEntities());
	}

	init(){
		/*getEntityIndex('created_at', 10, 'desc')
		.then(data => {
			console.log('inside of home-table init -> then', 'data.data: ', data.data);
			this.setState({entities: data.data});     
			console.log('this is now: ', this);			
		})*/
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

		        </tbody>
		    </table>
		 </div>	
	 	)  	
	}
}	