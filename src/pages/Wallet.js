import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDataExpenses, fetchDataCurrencies } from '../actions';
import { INITIAL_STATE } from './helpers';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentDidMount = () => {
    const { getCurrencies } = this.props;
    getCurrencies();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { sendExpenses } = this.props;
    const { btnText, value, description, currency, method, tag } = this.state;
    if (btnText === 'Adicionar despesa') {
      sendExpenses({
        value,
        description,
        currency,
        method,
        tag,
      });
    }
    this.setState(INITIAL_STATE);
  }

    calculateExpenses = () => {
      const { expenses } = this.props;
      return expenses.reduce((acc, {
        value, exchangeRates, currency,
      }) => acc + (+value * +exchangeRates[currency].ask), 0).toFixed(2);
    }

    render() {
      const { email, currencies } = this.props;
      const {
        value, currency, method, tag, description, btnText,
      } = this.state;
      return (
        <div>
          <Header email={ email } totalValue={ this.calculateExpenses() } />
          <Form
            value={ value }
            description={ description }
            currency={ currency }
            method={ method }
            tag={ tag }
            btnText={ btnText }
            currencies={ currencies }
            handleClick={ this.handleClick }
            handleChange={ this.handleChange }
          />
          <Table />
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchDataCurrencies()),
  sendExpenses: (expense) => dispatch(fetchDataExpenses(expense)),
});

Wallet.propTypes = {
  email: PropTypes.string,
  sendExpenses: PropTypes.func,
  getCurrencies: PropTypes.func,
  expenses: PropTypes.arrayOf(PropTypes.object),
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
