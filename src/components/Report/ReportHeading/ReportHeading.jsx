import { GoHomeLink } from '../GoHomeButton/GoHomeButton';
import { ChoosePeriod } from '../ChoosePeriod';
import { Balance } from 'components/shared/Balance';
import css from './ReportHeading.module.css';

export const ReportHeading = ({
  month,
  year,
  handleGoPreviousPeriod,
  handleGoNextPeriod,
}) => {
  return (
    <div className={css.heading}>
      <GoHomeLink />
      <Balance />
      <ChoosePeriod
        month={month}
        year={year}
        handleGoNextPeriod={handleGoNextPeriod}
        handleGoPreviousPeriod={handleGoPreviousPeriod}
      />
    </div>
  );
};
