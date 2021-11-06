// import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
// import { useState, useEffect } from "react";
import css from './BackButton.module.css';

export const BackButton = () => {
  const handleGoBack = () => {
    console.log('go back');
    // const url = routerState.current ? `/movies?${routerState.current?.params}` : '/movies'
    // history.push(url);
  };

  return (
    <button type="button" className={css.backBtn} onClick={handleGoBack}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z"
          fill="#FF751D"
        />
      </svg>
      Вернуться на главную
    </button>
  );
};
