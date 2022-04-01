// Coloque aqui suas action
import { USER_LOGIN, RECEIVE_CURRENCIES, REQUEST_API } from './actionTypes';

/* Actions */
export const login = (email) => ({ type: USER_LOGIN, email });

export const requestAPI = () => ({ type: REQUEST_API });

export const getCurrencies = (currencies) => (
  { type: RECEIVE_CURRENCIES, currencies }
);

/* API request */
export const fetchDataCurrencies = () => async (dispatch) => {
  dispatch(requestAPI());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => dispatch(getCurrencies(
      Object.keys(currencies).filter((item) => item !== 'USDT'),
    )));
};
