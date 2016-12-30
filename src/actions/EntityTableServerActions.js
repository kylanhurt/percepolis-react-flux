import AppDispatcher from '../dispatchers/AppDispatcher.js';
import { RECEIVE_ENTITIES } from '../constants/EntityTableConstants.js';
//import RouterContainer from '../services/RouterContainer'

export type Action = {
	actionType: RECEIVE_ENTITIES,
	data: response	
};