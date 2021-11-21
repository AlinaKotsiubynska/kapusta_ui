import { useState, useEffect } from 'react';
import s from './SummaryLine.module.scss';
import { fetchDataByDate } from 'services/reports-api';

export const SummaryLine = ({ year, month }) => {
  const [summaryExpenses, setSummaryExpenses] = useState([]);
  const [summaryIncomes, setSummaryIncomes] = useState([]);
  const getSum = dataByDate =>
    dataByDate.reduce((total, { value }) => total + value, 0);

  useEffect(() => {
    (async function getData() {
      const expensesByDate = await fetchDataByDate(year, month, 'expenses');
      const incomesByDate = await fetchDataByDate(year, month, 'incomes');
      setSummaryExpenses(getSum(expensesByDate));
      setSummaryIncomes(getSum(incomesByDate));
    })();
  }, [month, year]);

  return (
    <div className={s.summaryLine}>
      <p className={s.expenses}>
        Расходы:<span>{summaryExpenses}</span>
      </p>
      <svg
        width="2"
        height="36"
        viewBox="0 0 2 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0V36" stroke="#E0E5EB" />
      </svg>
      <p className={s.incomes}>
        Доходы:<span>{summaryIncomes}</span>
      </p>
    </div>
  );
};
