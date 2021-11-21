import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL = 'https://app-kapusta.herokuapp.com';

export async function fetchDataByDate(year, mounth, point) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/reports/group-by-category?year=${year}&month=${mounth}&sign=${point}`,
    );
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
