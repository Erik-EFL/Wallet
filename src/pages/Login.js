import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonDisabled: true,
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validate);
  }

  validate = () => {
    const { email, password } = this.state;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i;
    /* Regex para validar o e-mail vindo de:
    https://medium.com/shopify-hub/como-validar-cpf-e-cnpj-usando-express%C3%B5es-regulares-regex-com-javascript-60779229455d */
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= Number('6');
    const fields = [email, password];
    const validateFields = fields.every((field) => field !== '');
    const isValid = isPasswordValid && isEmailValid && validateFields;
    return isValid
      ? this.setState({ isButtonDisabled: false })
      : this.setState({ isButtonDisabled: true });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { user, history } = this.props;
    const { email } = this.state;
    user(email);
    history.push('/carteira');
  }

  render() {
    const { isButtonDisabled } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <div className="login-container">
          <input
            type="email"
            name="email"
            onChange={ this.handleChange }
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ isButtonDisabled }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (email) => dispatch(login(email)),
});

Login.propTypes = {
  user: PropTypes.func,
  history: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
