import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReportHeading } from '../ReportHeading';
import { CategoriesList } from '../CategoriesList';
import { SummaryLine } from '../SummaryLine';
import { fetchAllCategories, fetchDataByDate } from 'services/reports-api';

const currentData = new Date();
const currentYear = currentData.getFullYear();
const currentMonth = currentData.getUTCMonth();

export const ReportPage = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const history = useHistory();
  const { point } = useParams();

  useEffect(() => {
    (async function getAllCategories() {
      const data = await fetchAllCategories();
      const categories = data.filter(item => item.sign === point);
      setAllCategories(categories);
    })();
  }, [point]);

  useEffect(() => {
    (async function getData() {
      const expensesByDate = await fetchDataByDate(
        selectedYear,
        selectedMonth,
        point,
      );
      console.log('result fetch', expensesByDate);
      const categoriesByDate = expensesByDate;
      if (!allCategories || !categoriesByDate) return;
      const dataByCategories = allCategories.map(category => {
        const dataByCategory = categoriesByDate.find(
          item => item.categoryName === category.name,
        );
        const value = dataByCategory ? dataByCategory.value : '0';
        const url = `/img/${category.nameEn}.svg`;
        const subCategories = dataByCategory
          ? dataByCategory.subCategories
          : [];
        const fullCategory = { ...category, value, url, subCategories };
        return fullCategory;
      });
      return setCategories(dataByCategories);
    })();
  }, [selectedMonth, selectedYear, allCategories, point]);

  const handleGoNextPeriod = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      const year = selectedYear + 1;
      setSelectedYear(year);
      return;
    }
    const month = selectedMonth + 1;
    setSelectedMonth(month);
    return;
  };

  const handleGoPreviousPeriod = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      const year = selectedYear - 1;
      setSelectedYear(year);
      return;
    }
    const month = selectedMonth - 1;
    setSelectedMonth(month);
    console.log('chengedmounth', month);
  };

  const handleSwitchPoint = () => {
    const newPoint = point === 'expenses' ? 'incomes' : 'expenses';
    history.push(`${newPoint}`);
    console.log('newpoint', newPoint);
  };

  return (
    <>
      <ReportHeading
        month={selectedMonth}
        year={selectedYear}
        handleGoNextPeriod={handleGoNextPeriod}
        handleGoPreviousPeriod={handleGoPreviousPeriod}
      />
      <SummaryLine month={selectedMonth} year={selectedYear} />
      <CategoriesList
        categories={categories}
        handleSwitchPoint={handleSwitchPoint}
        point={point}
      />
    </>
  );
};
