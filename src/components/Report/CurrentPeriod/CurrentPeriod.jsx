// import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
// import { useState, useEffect } from "react";
import css from './CurrentPeriod.module.css';

export const CurrentPeriod = () => {
  const handleGoPrevious = () => {
    console.log('go previous');
  };

  const handleGoNext = () => {
    console.log('go next');
  };

  return (
    <>
      <button
        type="button"
        className={css.previousBtn}
        onClick={handleGoPrevious}
      >
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 1L2 6L6 11" stroke="#FF751D" stroke-width="2" />
        </svg>
        Вернуться на главную
      </button>
      <p>Current Period</p>
      <button type="button" className={css.nextBtn} onClick={handleGoNext}>
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 6L1 11" stroke="#FF751D" stroke-width="2" />
        </svg>
        Вернуться на главную
      </button>

      {/* <h1>Home</h1>
      <Switch>
        <Route path={`${match.path}/${EXPENSES}`}>
          <p>EXPENSES</p>
        </Route>
        <Route path={`${match.path}/${INCOMES}`}>
          <p>INCOMES</p>
        </Route>
        <Route path={`${match.path}/${REPORTS}`}>
          <p>REPORTS</p>
        </Route>
        <Redirect to={`${match.path}/${EXPENSES}`} />
      </Switch> */}
    </>
  );
};
