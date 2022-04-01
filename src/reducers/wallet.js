// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, RECEIVE_CURRENCIES } from '../actions';

const INICIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    isFetching: false,
  },
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state, isFetching: true,
    };
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: action.value,
    };
  default:
    return state;
  }
};

export default wallet;
