// Todo store
//
// Requiring the Dispatcher, Constants, and
// event emitter dependencies
var AppDispatcher = require('../dispatchers/AppDispatcher');
import { LOAD_ENTITIES, RECEIVE_ENTITIES } from '../constants/EntityTableConstants';
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';

/////////////////////////////////////////////////

class EntityTableStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._endpoint = null;
    this._order = null;
    this._count = null;
    this._order = null;
    //this._jwt = null;

    var _store = {
      entities: []
    };    
  }

  _registerToActions(action) {
    console.log('_registerToActions action is:', action);
    switch(action.actionType) {
      case LOAD_ENTITIES:
        this._endpoint = action.endpoint;
        this._order = action.order;
        this._count = action.count;
        this._order = action.order;
        this.emitChange();
        break;
      case RECEIVE_ENTITIES:
        console.log('case is RECEIVE_ENTITIES, entities are:', entities);
        this.props.entities = action.entities;
        break;
      default:
        break;
    };
  }

  /*addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }*/

  getEntities() {
    console.log('in EntityTableStore.getEntities');
    return this._store;
  }

}

const entityTableStore = new EntityTableStore;
AppDispatcher.register(entityTableStore._registerToActions.bind(entityTableStore));

export default entityTableStore;

///////////////////////////////////////
/*var CHANGE_EVENT = 'change';

// Define the store as an empty array
var _store = {
  list: [],
  editing: false
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store


// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register(function(payload) {
  console.log('payload is:', payload);
  var action = payload.action;

  switch(action.actionType) {

    /*case AppConstants.NEW_ITEM:

      // Add the data defined in the TodoActions
      // which the View will pass as a payload
      _store.editing = true;
      TodoStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.SAVE_ITEM:

      // Add the data defined in the TodoActions
      // which the View will pass as a payload
      _store.list.push(action.text);
      _store.editing = false;
      TodoStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.REMOVE_ITEM:

      // View should pass the text's index that
      // needs to be removed from the store
      _store.list.splice(action.index, 1);
      TodoStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.LOAD_ENTITIES:
      console.log('loading case Load_Entities');
      // Construct the new todo string
      var newEntity = resp;

      // Add the new todo to the list
      _store.list.push(newEntity);
      EntityTableStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = EntityTableStore;*/