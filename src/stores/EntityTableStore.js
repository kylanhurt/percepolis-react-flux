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
        console.log('_registerToActions action is:', )    ;
         switch(action.actionType) {
       case LOAD_ENTITIES:
                 this._endpoint = action.endpoint;
         this._order = action.order;
         this._count = action.count;
         this._order = action.order;
         this.emitChange();
                break;

      case RECEIVE_ENTITIES:
               this._entities = action.data;
        this.emitChange();        
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
        return this._entities;

  }

}

const entityTableStore = new EntityTableStore;
AppDispatcher.register(entityTableStore._registerToActions.bind(entityTableStore));

export default entityTableStore;