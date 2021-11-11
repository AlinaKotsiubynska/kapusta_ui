// import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
// import css from './ReportPage.module.css'
import { ReportHeading } from '../ReportHeading';
import { CategoriesList } from '../CategoriesList';
import { Chart } from '../Chart';
import { fetchAllCategories, fetchDataByDate } from 'services/reports-api';
import { data } from './data';

fetchAllCategories().then(response => console.log('response', response));
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

  useEffect(() => fetchAllCategories().then(setAllCategories), []);
  console.log('все категории', allCategories);

  useEffect(() => {
    (async function getData() {
      // const expensesByDate = await fetchDataByDate(month, year);
      const expensesByDate = data;
      if (!allCategories || !expensesByDate) return;
      const expensesByCategories = allCategories.map(category => {
        const dataByCategory = expensesByDate.find(
          item => item.categoryName === category.name,
        );
        const value = dataByCategory ? dataByCategory.value : '0';
        const nameEng = dataByCategory ? dataByCategory.nameEn : '';
        const url = `/img/${nameEng}.svg`;
        const fullCategory = { ...category, value, url, nameEng };
        return fullCategory;
      });
      return setExpensesByCategories(expensesByCategories);
    })();
  }, [month, year, allCategories]);
  console.log('data', expensesByCategories);

  return (
    <>
      <ReportHeading />
      <CategoriesList categories={expensesByCategories} />
      <Chart />
    </>
  );
};
