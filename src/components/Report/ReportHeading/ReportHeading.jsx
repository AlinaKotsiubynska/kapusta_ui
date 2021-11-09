// import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
// import { useState, useEffect } from "react";
import { GoHomeLink } from '../GoHomeButton/GoHomeButton';
import { ChoosePeriod } from '../ChoosePeriod';
import css from './ReportHeading.module.css';

export const ReportHeading = () => {
  return (
    <div className={css.heading}>
      <GoHomeLink />
      <p>Balance</p>
      <ChoosePeriod />
    </div>
  );
};
