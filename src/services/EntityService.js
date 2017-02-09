import request from 'reqwest';
import when from 'when';
import { NEW_ENTITY_URL, NEW_ENTITY_SUCCESS } from '../constants/EntityNewConstants';
import EntityActions from '../actions/EntityActions';
import AuthService from './AuthService';
import LoginStore from '../stores/LoginStore';
import AppDispatcher from '../dispatchers/AppDispatcher';

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
    }).then(function(response) {
      console.log('in then clause of EntityService.create, response is: ', response);
      if(response.success === true) {
        console.log('response.success is true');
        AppDispatcher.dispatch({
          actionType: NEW_ENTITY_SUCCESS,
          name: name
        });
      }
    });
    EntityActions.submitNewEntity(name, email);
  }
}

export default new EntityService()
