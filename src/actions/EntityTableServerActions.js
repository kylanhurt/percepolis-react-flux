import AppDispatcher from '../dispatchers/AppDispatcher.js';
import { RECEIVE_ENTITIES } from '../constants/EntityTableConstants.js';
//import RouterContainer from '../services/RouterContainer'

export default {
  receiveEntities: function(response) {
    console.log('EntityTableServerActions.receiveEntities executing');
    AppDispatcher.dispatch({
      actionType: RECEIVE_ENTITIES,
      data: response
     });

  }
}
