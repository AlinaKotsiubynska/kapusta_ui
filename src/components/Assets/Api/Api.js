import axios from 'axios';

import { INCOMES } from 'helpers/constants/routes.constants';

export const getCategories = async () => {
  return await axios.get('categories');
};

const setIncomes = async body => {
  return await axios.post('transactions/incomes', body);
};

const setExpenses = async body => {
  return await axios.post('transactions/expenses', body);
};

export const getCategoriesBySign = async tabKey => {
  const { data } = await getCategories();
  const categories = data.results;
  return categories.filter(el => el.sign === tabKey);
};

export const setTransactions = tabKey => {
  return tabKey === INCOMES ? setIncomes : setExpenses;
};

export const getReportsByMouthAndYear = async ({ mounth, year, sign }) => {
  const normalizeMounth = Number(mounth) - 1;
  return axios.get(
    `reports/detals?sign=${sign.toLowerCase()}&year=${year}&month=${normalizeMounth}`,
  );
};

export const deleteTransaction = async id => {
  return axios.delete(`/transactions/${id}`);
};
