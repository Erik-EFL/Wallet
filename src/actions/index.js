// Coloque aqui suas actions

export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export const login = (email) => ({ type: USER_LOGIN, email });

export const requestAPI = () => ({ type: REQUEST_API });

export const getCurrencies = (data) => ({ type: RECEIVE_CURRENCIES, data });

export const fetchDataCurrencies = () => async (dispatch) => {
  try {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(getCurrencies(
        Object.keys(data).filter((item) => item !== 'USDT'),
      )));
  } catch (error) {
    console.error(error);
  }
};
