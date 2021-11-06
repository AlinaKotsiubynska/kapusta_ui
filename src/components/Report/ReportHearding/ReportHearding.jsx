// import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
// import { useState, useEffect } from "react";
import { BackButton } from '../BackButton/BackButton';
import { CurrentPeriod } from '../CurrentPeriod';
// import css from './ReportingHearding.module.css'

export const ReportPage = () => {
  return (
    <>
      <BackButton />
      <p>Balance</p>
      <CurrentPeriod />
    </>
  );
};
