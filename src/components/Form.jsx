import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { /* currNames, */ payMethods, expenseTypes } from '../pages/helpers';

class Form extends Component {
  render() {
    const {
      handleChange, handleClick, currencies, value, currency, method, tag, description,
      btnText,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="number"
              data-testid="value-input"
              name="value"
              id="value"
              value={ value }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              name="currency"
              value={ currency }
              onChange={ handleChange }
              id="currency"
            >
              {currencies
              && currencies.map((itens) => (
                <option key={ itens } value={ itens }>
                  { itens }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select
              data-testid="method-input"
              name="method"
              id="method"
              value={ method }
              onChange={ handleChange }
            >
              {
                payMethods.map((methods) => (
                  <option key={ methods } value={ methods }>
                    {methods}
                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="tag">
            Tipo de Despesa
            <select
              data-testid="tag-input"
              name="tag"
              id="tag"
              value={ tag }
              onChange={ handleChange }
            >
              {
                expenseTypes.map((type) => (
                  <option key={ type } value={ type }>
                    {type}
                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              data-testid="description-input"
              name="description"
              id="description"
              value={ description }
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ handleClick }
          >
            {btnText}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  sendExpense: PropTypes.func,
  getCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Form);
