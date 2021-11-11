import { get } from './network';

export const getCurrent = async () => {
  return await get('user/current');
};

export const getCategory = async value => {
  return await get('categories/' + value);
};

export const getCategories = async () => {
  return await getCategory('');
};
