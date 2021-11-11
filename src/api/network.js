import axios from 'axios';

axios.defaults.baseURL = 'app-kapusta.herokuapp.com/api';

export const get = async url => {
  return await axios.get(url);
};

export const post = async (url, body) => {
  return await axios.post(url, body);
};

export const patch = async (url, body) => {
  return await axios.patch(url, body);
};
