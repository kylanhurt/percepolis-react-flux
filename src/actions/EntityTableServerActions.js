import AppDispatcher from '../dispatchers/AppDispatcher.js';
import EntityTableConstants from '../constants/EntityTableConstants.js';
//import RouterContainer from '../services/RouterContainer'

export default {
  receiveEntities: function(response) {
    console.log('EntityTableServerActions.receiveEntities executing');
    AppDispatcher.handleServerAction({
      actionType: EntityTableConstants.RECEIVE_ENTITIES,
      response: response
    });
  }
}
