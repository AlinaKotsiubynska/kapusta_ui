import axios from 'axios';

axios.defaults.baseURL = 'https://app-kapusta.herokuapp.com/api';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTkxOGY4ZTFkMTVmOGU1OWVjNzQ1ODUiLCJpYXQiOjE2MzcxNzQ5MTJ9.W4wkkNPWjgWJ6mNfdedRaQ0bojUxdZUdwqgL1GCp2tk';

export const getCategories = async () => {
  return await axios.get('categories');
};

export const setIncomes = async body => {
  return await axios.post('transactions/incomes', body);
};
