import { post, patch } from './network';

export const userSignUp = async body => {
  return await post('user/signup', body);
};

export const userLogIn = async body => {
  return await post('user/login', body);
};

export const userLogOut = async () => {
  return await post('user/logout');
};

export const setBalanse = async body => {
  return await patch('user/balance', body);
};

export const setCategory = async body => {
  return await post('categories', body);
};
