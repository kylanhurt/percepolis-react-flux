import request from 'reqwest';
import when from 'when';
import {NEW_ENTITY_URL} from '../constants/EntityNewConstants';
import EntityActions from '../actions/EntityActions';
import AuthService from './AuthService';
import LoginStore from '../stores/LoginStore';

class EntityService {

  create(email, name) {
      return request({
      url: NEW_ENTITY_URL,
      method: 'POST',
      crossOrigin: true,
      contentType: "application/json",
      type: 'json',
       data: JSON.stringify({  
        email: email, 
        name: name,
        token: LoginStore._jwt
      })
    });
  }
}

export default new EntityService()
