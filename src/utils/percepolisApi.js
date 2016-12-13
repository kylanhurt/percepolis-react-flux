import { loadEntities } from '../actions/EntityTableServerActions';
import request from 'superagent';

export default {

  get: function(endpoint, data) {
  	console.log('inside percApi and data is:', data);
    request.get('http://localhost/api/' + endpoint).query(data)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);

        EntityTableServerActions.loadEntities(response.body);
      });
  }
};