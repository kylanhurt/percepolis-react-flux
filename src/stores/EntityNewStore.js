import { SUBMIT_NEW_ENTITY, NEW_ENTITY_SUCCESS } from '../constants/EntityNewConstants';
import BaseStore from './BaseStore';


class EntityNewStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    //this._user = null;
    //this._jwt = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case SUBMIT_NEW_ENTITY:
        this._entityName = action.name;
        this._userEmail = action.email;
        this.emitChange();
        break;
      case NEW_ENTITY_SUCCESS:
        this._entityNewSuccess = true;
        this.emitChange();
      default:
        break;
    };
  }

  get entityName() {
    return this._entityName;
  }

  isEntityNewSuccess() {
    return this._entityNewSuccess;
  }

}

export default new EntityNewStore();
