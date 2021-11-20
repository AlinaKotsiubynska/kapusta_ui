import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL = 'https://app-kapusta.herokuapp.com';
//const token =
//  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTg1ODlkMWU0MWYwNDc2NmU0MjNiN2YiLCJpYXQiOjE2MzY5MjEwMjJ9.tP3_jV-0uixrp5SkR0ZyJaUR7Pv049TcREH9BptUXc4';


export async function fetchDataByDate(year, mounth, point) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/reports/group-by-category?year=${year}&month=${mounth}&sign=${point}`,
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
    return response.data.results;
  } catch {
    toast.error('Something went wrong');
  }
}
