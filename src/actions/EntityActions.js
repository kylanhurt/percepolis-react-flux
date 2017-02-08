import AppDispatcher from '../dispatchers/AppDispatcher.js';
import { SUBMIT_NEW_ENTITY, NEW_ENTITY_URL } from '../constants/EntityNewConstants.js';
import percepolisApi from '../utils/percepolisApi';

export default {
  submitNewEntity: function(name) {
  	
  	var endpoint = NEW_ENTITY_URL ? NEW_ENTITY_URL : 'entity';
  	var data = {
  		name: name,
  	}
  	
    AppDispatcher.dispatch({
      actionType: SUBMIT_NEW_ENTITY,
      data: data
    });
    
    percepolisApi.get(endpoint, data);
  }
}