import Button from 'components/shared/Button';
import s from './AssetsForm.module.scss';
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
import { useSetChangedDate, setCurrentBalance } from 'utils';

export const AssetsForm = ({ tabKey, setUpdate }) => {
  const { setReportContext, setUserContext } = useContext(Context);
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

    const response = await setTransactions(tabKey)({
      date: new Date(date).getTime(),
      category,
      description,
      value: Number(value),
    });
    setUpdate(pr => !pr);

    setUserContext(setCurrentBalance(response));
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
    <div className={s.wrapper}>
      <form onSubmit={onSubmitForm} className={s.form} ref={ref}>
        <div className={s.formData}>
          <div className={s.calendarWrapper}>
            <div className={s.calendarLabel} onClick={onLabelClic}>
              <CalendIcon className={s.calendarIcon} />{' '}
              {format(date, 'dd.MM.yyyy')}
            </div>
            {!isVisible && (
              <Calendar
                className={s.calendar}
                view="month"
                onClickDay={onClickDay}
              />
            )}
          </div>
          <div className={s.formInputs}>
            <input
              required
              className={s.input}
              type="text"
              name="input"
              placeholder="Описание товара"
            />
            <select className={s.select} size="1" name="select" required>
              {categories.map(el => (
                <option key={el._id} value={el._id}>
                  {el.name}
                </option>
              ))}
            </select>
            <div className={s.calculatorWrapper}>
              <Calculator className={s.calculatorIcon} />
              <input
                required
                name="calc"
                className={s.calc}
                type="number"
                step="0.01"
                placeholder="0,00"
              />
            </div>
          </div>
        </div>
        <div className={s.buttonsWrapper}>
          <Button type="submit" className={s.button}>
            ввод
          </Button>
          <Button type="button" onClick={clearForm} className={s.button}>
            очистить
          </Button>
        </div>
      </form>
    </div>
  );
};
