import AppDispatcher from '../dispatchers/AppDispatcher.js';
import { LOAD_ENTITIES } from '../constants/EntityTableConstants.js';
import percepolisApi from '../utils/percepolisApi';

export default {
  loadEntities: function(endpoint, criteria, count, order) {
  	console.log('EntityTableActions.loadEntities executing');
  	var endpoint = endpoint ? endpoint : 'entity';
  	var criteria = criteria ? criteria : 'created_at';
  	var count = count ? count : 10;
  	var order = order ? order : 'desc';
  	var data = {
  		criteria: criteria,
  		count: count,
  		order: order
  	}
  	console.log('within EntityTableActions and data is: ', data);
    AppDispatcher.handleViewAction({
      actionType: LOAD_ENTITIES,
      data: data
    });
    
    percepolisApi.get(endpoint, data);
  }
}