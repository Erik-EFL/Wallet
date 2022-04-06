// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_API, RECEIVE_CURRENCIES, RECEIVE_EXPENSES }
from '../actions/actionTypes';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
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
      currencies: action.currencies,
    };
  case RECEIVE_EXPENSES:
  {
    const expensesProcessing = state.expenses.length;
    const expenseObj = {
      ...action.expense,
      id: !expensesProcessing ? 0 : expensesProcessing,
    };
    return {
      ...state,
      expenses: [...state.expenses, expenseObj],
    };
  }
  default:
    return state;
  }
};

export default wallet;
