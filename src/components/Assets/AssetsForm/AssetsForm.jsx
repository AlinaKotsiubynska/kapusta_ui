import Button from 'components/shared/Button';
import styles from './AssetsForm.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ReactComponent as CalendIcon } from 'assets/icons/calendar.svg';
import { ReactComponent as Calculator } from 'assets/icons/calculator.svg';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { getCategories, setIncomes } from '../Api/Api';

export const AssetsForm = ({ tabKey }) => {
  const [date, setDate] = useState(null);
  const [isVisible, setVisible] = useState(true);
  const [categories, setCategories] = useState([]);

  const dateNow = format(new Date(), 'dd.MM.yyyy');

  const formHandler = e => {
    e.preventDefault();
    const description = e.target.input.value;
    const category = e.target.select.value;
    const value = e.target.calc.value;
    console.log(categories);
    console.log({ date: new Date(date), category, description, value });
    setIncomes({ date: new Date(date), category, description, value });
  };

  const onClickDay = day => {
    const formatDay = format(day, 'dd.MM.yyyy');
    setDate(formatDay);
    onLabelClic();
    return;
  };

  const onLabelClic = () => {
    setVisible(prev => !prev);
  };

  const getSign = (tabKey, categories) => {
    return categories.filter(el => el.sign === tabKey);
  };

  useEffect(() => {
    (async () => {
      const { data } = await getCategories();
      const sortCategories = getSign(tabKey, data.results);
      setCategories(sortCategories);
    })();
  }, [tabKey]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.calendarWrapper}>
        <div className={styles.calendarLabel} onClick={onLabelClic}>
          <CalendIcon className={styles.calendarIcon} /> {date || dateNow}
        </div>
        {!isVisible && (
          <Calendar
            className={styles.calendar}
            view="month"
            onClickDay={onClickDay}
          />
        )}
      </div>
      <form onSubmit={formHandler} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="input"
          placeholder="Описание товара"
        />
        <select className={styles.select} size="1" name="select">
          {categories.map(el => (
            <option key={el._id} value={el._id}>
              {el.name}
            </option>
          ))}
        </select>
        <div className={styles.calculatorWrapper}>
          <Calculator className={styles.calculatorIcon} />
          <input
            name="calc"
            className={styles.calc}
            type="number"
            step="0.01"
            placeholder="0,00"
          />
        </div>
        <Button type="submit">ввод</Button>
        <Button type="button">очистить</Button>
      </form>
    </div>
  );
};
