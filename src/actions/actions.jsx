import {
  USER_LOGIN, RECEIVE_CURRENCIES, REQUEST_API, RECEIVE_EXPENSES }
from './actionTypes';

/* Actions */
export const login = (email) => (
  {
    type: USER_LOGIN, email,
  }
);

export const requestAPI = () => (
  {
    type: REQUEST_API,
  }
);

export const getCurrencies = (currencies) => (
  {
    type: RECEIVE_CURRENCIES,
    currencies,
  }
);

export const sendExpenses = (expense, exchangeRates) => (
  {
    type: RECEIVE_EXPENSES,
    expense:
    {
      ...expense,
      exchangeRates,
    },
  }
);
