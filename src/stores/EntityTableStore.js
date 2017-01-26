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
    console.log('_registerToActions action is:', )    ;
    console.log(action);
     switch(action.actionType) {
       case LOAD_ENTITIES:
        console.log('case is LOAD_ENTITIES');
         this._endpoint = action.endpoint;
         this._order = action.order;
         this._count = action.count;
         this._order = action.order;
         this.emitChange();
        console.log('ETStore.LOAD_ENTITIES has emitted change. this is:', this);
        break;

      case RECEIVE_ENTITIES:
        console.log('case is RECEIVE_ENTITIES, action.data is:', action.data);
       this._entities = action.data;
        this.emitChange();        
        console.log('RECEIVE_ENTITIES, this is now:', this);
         break;
 
       default:
        console.log('case is DEFAULT');
        console.log('action.actionType is:', action.actionType);
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
    console.log('in EntityTableStore.getEntities', 'this._entities is:', this._entities);
    return this._entities;

  }

}

const entityTableStore = new EntityTableStore;
AppDispatcher.register(entityTableStore._registerToActions.bind(entityTableStore));

export default entityTableStore;