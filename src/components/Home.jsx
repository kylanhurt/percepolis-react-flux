import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'
import EntityTable from './EntityTable'
import HomeBanner from './home/HomeBanner'

export default AuthenticatedComponent(class Home extends React.Component {
  render() {
    return (
    	<div>
	    	<HomeBanner />
	    	<EntityTable />
    	</div>
	);
  }
});
