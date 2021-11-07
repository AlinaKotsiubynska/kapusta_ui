// import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
// import { useState, useEffect } from "react";
import { BackButton } from '../BackButton/BackButton';
import { ChoosePeriod } from '../ChoosePeriod';
import css from './ReportHeading.module.css';

export const ReportHeading = () => {
  return (
    <div className={css.heading}>
      <BackButton />
      <p>Balance</p>
      <ChoosePeriod />
    </div>
  );
};
