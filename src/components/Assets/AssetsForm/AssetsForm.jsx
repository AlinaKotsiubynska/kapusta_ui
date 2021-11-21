import Button from 'components/shared/Button';
import styles from './AssetsForm.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ReactComponent as CalendIcon } from 'assets/icons/calendar.svg';
import { ReactComponent as Calculator } from 'assets/icons/calculator.svg';
import { useState, useEffect, useContext, useRef } from 'react';
import { format } from 'date-fns';
import {
  setTransactions,
  getCategoriesBySign,
} from 'components/Assets/Api/Api';
import { Context } from 'components/Context/Context';
import { useSetChangedDate } from 'utils';

export const AssetsForm = ({ tabKey, setUpdate }) => {
  const { setReportContext } = useContext(Context);
  const [date, setDate] = useState(() => new Date());
  const [isVisible, setVisible] = useState(true);
  const [categories, setCategories] = useState([]);

  useSetChangedDate(setReportContext, date);

  const ref = useRef(null); // from form

  const onSubmitForm = async e => {
    e.preventDefault();
    const description = e.target.input.value;
    const category = e.target.select.value;
    const value = e.target.calc.value;

    await setTransactions(tabKey)({
      date: new Date().getTime(date),
      category,
      description,
      value: Number(value),
    });

    setUpdate(pr => !pr);

    clearForm();
  };

  const clearForm = () => {
    ref.current.reset();
  };

  const onClickDay = day => {
    setDate(day);
    onLabelClic();
    return;
  };

  const onLabelClic = () => {
    setVisible(prev => !prev);
  };

  useEffect(() => {
    (async () => {
      const sortCategories = await getCategoriesBySign(tabKey);
      setCategories(sortCategories);
    })();
  }, [tabKey]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.calendarWrapper}>
        <div className={styles.calendarLabel} onClick={onLabelClic}>
          <CalendIcon className={styles.calendarIcon} />{' '}
          {format(date, 'dd.MM.yyyy')}
        </div>
        {!isVisible && (
          <Calendar
            className={styles.calendar}
            view="month"
            onClickDay={onClickDay}
          />
        )}
      </div>
      <form onSubmit={onSubmitForm} className={styles.form} ref={ref}>
        <input
          required
          className={styles.input}
          type="text"
          name="input"
          placeholder="Описание товара"
        />
        <select className={styles.select} size="1" name="select" required>
          {categories.map(el => (
            <option key={el._id} value={el._id}>
              {el.name}
            </option>
          ))}
        </select>
        <div className={styles.calculatorWrapper}>
          <Calculator className={styles.calculatorIcon} />
          <input
            required
            name="calc"
            className={styles.calc}
            type="number"
            step="0.01"
            placeholder="0,00"
          />
        </div>
        <Button type="submit">ввод</Button>
        <Button type="button" onClick={clearForm}>
          очистить
        </Button>
      </form>
    </div>
  );
};
