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
