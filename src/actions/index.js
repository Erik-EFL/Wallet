// Coloque aqui suas action
import { getCurrencies, sendExpenses, requestAPI } from './actions';

/* API request */
export const fetchDataCurrencies = () => async (dispatch) => {
  dispatch(requestAPI());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => dispatch(getCurrencies(
      Object.keys(currencies).filter((item) => item !== 'USDT'),
    )));
};

export const fetchDataExpenses = (expanse) => async (dispatch) => {
  dispatch(requestAPI());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(sendExpenses(expanse, data));
};
