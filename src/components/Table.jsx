import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currNames, tableItems } from '../pages/helpers';

class Table
  extends Component {
  render() {
    const { expenses, handleEdit, handleDelete } = this.props;
    console.log(expenses);
    return (
      <div>
        <table>
          <thead>
            {tableItems.map((item) => (
              <th name={ item } key={ item }>{ item }</th>
            ))}
          </thead>
          { expenses
          && expenses.map((expense, index) => (
            <tbody key={ index }>
              <tr>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{Number(expense.value).toFixed(2)}</td>
                <td>Real</td>
                <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
                <td>
                  {(+expense.value * +expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)}

                </td>
                <td>{currNames[expense.currency]}</td>
                <td className="buttons-container">
                  <button
                    type="button"
                    data-testid="edit-btn"
                    className="edit-btn"
                    id={ expense.id }
                    onClick={ handleEdit }
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    className="delete-btn"
                    id={ expense.id }
                    onClick={ handleDelete }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Table);
