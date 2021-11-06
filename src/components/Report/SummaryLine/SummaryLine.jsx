// import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
// import { useState, useEffect } from "react";
import css from './SummaryLine.module.css';

export const SummaryLine = () => {
  return (
    <>
      <p className={css.expenses}>
        Расходы:<span>-18000</span>
      </p>
      <svg
        width="2"
        height="36"
        viewBox="0 0 2 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0V36" stroke="#E0E5EB" />
      </svg>
      <p className={css.income}>
        Доходы:<span>+30000</span>
      </p>
    </>
  );
};
