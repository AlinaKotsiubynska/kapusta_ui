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
const currentMounth = currentData.getUTCMonth();
console.log('Mounth', currentMounth);
console.log('year', currentYear);

export const ReportPage = () => {
  const [allCategories, setAllCategories] = useState(null);
  const [expensesByCategories, setExpensesByCategories] = useState(null);
  const [expensesByDate, setExpensesByDate] = useState(null);
  const [expensesBySubCategories, setExpensesSubByCategories] = useState(null);
  const [mounth, setMounth] = useState(currentMounth);
  const [year, setYear] = useState(currentYear);
  console.log('data');

  useEffect(() => fetchAllCategories().then(setAllCategories), []);
  useEffect(() => fetchDataByDate().then(setExpensesByDate), [mounth, year]);
  useEffect(() => {
    const expensesByCategories = allCategories.map(category => {
      const dataByCategory = expensesByDate.find(
        item => item.categoryName === category,
      );
      const value = dataByCategory ? dataByCategory.value : '0';
      category.value = value;
      category.url = `../../svg/${category}`;
      return category;
    });
    setExpensesByCategories(expensesByCategories);
  }, [allCategories, expensesByDate]);

  return (
    <>
      <ReportHeading />
      <CategoriesList />
      <Chart />
    </>
  );
};
