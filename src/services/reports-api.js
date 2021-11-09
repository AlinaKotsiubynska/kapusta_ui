import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL = 'https://app-kapusta.herokuapp.com';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTg4MmU0ZmIxMzQyNTI3NzA0MDJmY2QiLCJpYXQiOjE2MzYzMTQ3NTl9.3YE1AkbBtb_KPKnhPLyV1CaLXDG_SxpqZnvl7JwRecA';
// const API_KEY = '110a8a7647f7de9c0b3bf03e930472b8';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export async function fetchDataByDate(year, mounth) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/reports/group-by-category?year=${year}&month=${mounth}&sign=expenses`,
    );
    console.log(response.data.results);
    return response.data.results;
  } catch {
    toast.error('Something went wrong');
  }
}

export async function fetchAllCategories() {
  try {
    const response = await axios.get(`${BASE_URL}/api/categories`);
    //   console.log('res:', response.data.results)
    return response.data.results;
  } catch {
    toast.error('Something went wrong');
  }
}
