import s from './ChoosePeriod.module.scss';
import PropTypes from 'prop-types';

const months = [
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
];
export const ChoosePeriod = ({
  month,
  year,
  handleGoNextPeriod,
  handleGoPreviousPeriod,
}) => {
  const selectedMonth = months[month];
  return (
    <div className={s.currentPeriod}>
    <p className={s.periodTitle}>Текущий период</p>
    <div className={s.switcher}>
      <button
        type="button"
        className={s.previousBtn}
        onClick={handleGoPreviousPeriod}
      >
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 1L2 6L6 11" stroke="#FF751D" strokeWidth="2" />
        </svg>
      </button>
      <p className={s.period}>
        <span className={s.month}>{selectedMonth}</span>
        <span className={s.year}>{year}</span>
      </p>
      <button type="button" className={s.nextBtn} onClick={handleGoNextPeriod}>
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 6L1 11" stroke="#FF751D" strokeWidth="2" />
        </svg>
      </button>
      </div>
    </div>
  );
};

ChoosePeriod.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  handleGoNextPeriod: PropTypes.func.isRequired,
  handleGoPreviousPeriod: PropTypes.func.isRequired,
};
