import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'
import EntityTable from './EntityTable'

export default AuthenticatedComponent(class Home extends React.Component {
  render() {
    return (
    	<EntityTable />
	);
  }
});
