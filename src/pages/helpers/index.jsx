export const payMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

export const expenseTypes = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

export const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: payMethods[0],
  tag: expenseTypes[0],
  btnText: 'Adicionar despesa',
  editId: '',
};

export const currNames = {
  USD: 'Dólar Comercial', EUR: 'Euro', CAD: 'Dólar Canadense',
};

export const tableItems = [
  'Descrição',
  'Tag', 'Método de pagamento',
  'Valor', 'Moeda', 'Câmbio utilizado',
  'Valor convertido', 'Moeda de conversão', 'Editar/Excluir',
];
