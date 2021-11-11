// import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
// import css from './ReportPage.module.css'
import { ReportHeading } from '../ReportHeading';
import { CategoriesList } from '../CategoriesList';
import { Chart } from '../Chart';
import { fetchAllCategories, fetchDataByDate } from 'services/reports-api';

fetchAllCategories().then(response => console.log(response));
const currentData = new Date();
const currentYear = currentData.getFullYear();
const currentMonth = currentData.getUTCMonth();
console.log('Month', currentMonth);
console.log('year', currentYear);

export const ReportPage = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [expensesByCategories, setExpensesByCategories] = useState([]);
  //const [expensesBySubCategories, setExpensesSubByCategories] = useState(null);
  const month = currentMonth;
  const year = currentYear;
  console.log('data');

  useEffect(() => fetchAllCategories().then(setAllCategories), []);
  console.log('все категории', allCategories);

  useEffect(() => {
    (async function getData() {
      const expensesByDate = await fetchDataByDate(month, year);
      if (!allCategories || !expensesByDate) return;
      const expensesByCategories = allCategories.map(category => {
        const dataByCategory = expensesByDate.find(
          item => item.categoryName === category,
        );
        const value = dataByCategory ? dataByCategory.value : '0';
        category.value = value;
        category.url = `</img/${category}.svg`;
        return category;
      });
      return setExpensesByCategories(expensesByCategories);
    })();
    // getData();
  }, [month, year, allCategories]);
  console.log('data', expensesByCategories);
  return (
    <>
      <ReportHeading />
      <CategoriesList />
      <Chart />
    </>
  );
};
