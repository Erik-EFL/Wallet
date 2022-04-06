import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalValue } = this.props;
    return (
      <div>
        <header>
          <div className="user-info">
            <p data-testid="email-field">{`E-mail: ${email}`}</p>
            <p>
              Despesa Total: R$
              <span data-testid="total-field">{totalValue}</span>
            </p>
            <p data-testid="header-currency-field">Moeda: BRL</p>
          </div>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  totalValue: PropTypes.number,
}.isRequired;

export default Header;
