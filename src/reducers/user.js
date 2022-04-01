// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_LOGIN } from '../actions/actionTypes';

const INICIAL_STATE = {
  email: '',
};

const user = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
