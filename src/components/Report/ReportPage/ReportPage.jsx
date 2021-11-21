import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReportHeading } from '../ReportHeading';
import { CategoriesList } from '../CategoriesList';
import { SummaryLine } from '../SummaryLine';
import { fetchAllCategories } from 'services/reports-api';
import toast, { Toaster } from 'react-hot-toast';

const currentData = new Date();
const currentYear = currentData.getFullYear();
const currentMonth = currentData.getUTCMonth();

export const ReportPage = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const history = useHistory();
  const { point } = useParams();

  useEffect(() => {
    async function getAllCategories() {
      try {
        const data = await fetchAllCategories();
        const categories = data.filter(item => item.sign === point);
        setAllCategories(categories);
      } catch {
        toast.error('Something went wrong');
      }
    }
    getAllCategories();
  }, [point]);

  const handleGoNextPeriod = e => {
    e.preventDefault();
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

  const handleGoPreviousPeriod = e => {
    e.preventDefault();
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      const year = selectedYear - 1;
      setSelectedYear(year);
      return;
    }
    const month = selectedMonth - 1;
    setSelectedMonth(month);
  };

  const handleSwitchPoint = e => {
    e.preventDefault();
    const newPoint = point === 'expenses' ? 'incomes' : 'expenses';
    history.push(`${newPoint}`);
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
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        handleSwitchPoint={handleSwitchPoint}
        point={point}
        allCategories={allCategories}
      />
      <Toaster />
    </>
  );
};
