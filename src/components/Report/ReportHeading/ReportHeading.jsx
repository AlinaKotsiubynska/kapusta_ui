import PropTypes from 'prop-types';
import { GoHomeLink } from '../GoHomeButton/GoHomeButton';
import { ChoosePeriod } from '../ChoosePeriod';
import { Balance } from 'components/shared/Balance';
import s from './ReportHeading.module.scss';

export const ReportHeading = ({
  month,
  year,
  handleGoPreviousPeriod,
  handleGoNextPeriod,
}) => {
  return (
    <div className={s.heading}>
      <GoHomeLink />
      <div className={s.wrapper}>
        <Balance isDisabled={true} />
        <ChoosePeriod
          month={month}
          year={year}
          handleGoNextPeriod={handleGoNextPeriod}
          handleGoPreviousPeriod={handleGoPreviousPeriod}
        />
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
