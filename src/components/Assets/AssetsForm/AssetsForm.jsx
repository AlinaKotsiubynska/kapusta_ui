import Button from 'components/shared/Button';
import styles from './AssetsForm.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ReactComponent as CalendIcon } from 'assets/icons/calendar.svg';
import { useState } from 'react';
import { format } from 'date-fns';

const options = ['транспорт', 'еда', 'коммуналка', 'связь'];

export const AssetsForm = () => {
  const [date, setDate] = useState(null);
  const [isVisible, setVisible] = useState(true);

  const dateNow = format(new Date(), 'MM.dd.yyyy');

  const formHandler = e => {
    e.preventDefault();
    console.log(e.target.input.value);
    console.log(e.target.select.value);
  };

  const onClickDay = day => {
    const formatDay = format(day, 'MM.dd.yyyy');
    setDate(formatDay);
    onLabelClic();
    return;
  };

  const onLabelClic = () => {
    setVisible(prev => !prev);
  };

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
        <input className={styles.input} type="text" name="input" />
        <select className={styles.select} size="1" name="select">
          {options.map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
        <div className={styles.calc}>calc</div>
        <Button type="submit">ввод</Button>
        <Button type="button">очистить</Button>
      </form>
    </div>
  );
};
