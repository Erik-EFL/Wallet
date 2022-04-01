import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchDataCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount = () => {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, currencies } = this.props;
    console.log(currencies);
    return (
      <div>
        <header>
          <div className="user-info">
            <p data-testid="email-field">{email}</p>
            <p data-testid="total-field">0</p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </header>
        <form>
          <label htmlFor="expense">
            Valor
            <input
              type="number"
              data-testid="value-input"
              name="number"
              id="expense"
            />
          </label>
          <label htmlFor="currencies">
            Moeda
            <select
              name="currencies"
              onChange={ this.handleChange }
              id="currencies"
            >
              {currencies
              && currencies.map((itens) => (
                <option key={ itens }>
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
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tipo de Despesa
            <select
              data-testid="tag-input"
              name="tag"
              id="tag"
            >
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            <input
              type="text"
              data-testid="description-input"
              name="description"
              id="description"
            />
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchDataCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string,
  currencies: PropTypes.arrayOf(PropTypes.string),
  getCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
