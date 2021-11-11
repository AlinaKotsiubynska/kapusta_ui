import {
  Route,
  Link,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
// import { useState, useEffect } from 'react';
import css from './CategoriesList.module.css';
import { CategoriesItem } from '../CategoriesItem';
import { Chart } from '../Chart';

export const CategoriesList = ({ categories }) => {
  const { url, path } = useRouteMatch();

  const handleGoPrevious = () => {
    console.log('go previous');
  };

  const handleGoNext = () => {
    console.log('go next');
  };

  return (
    <>
      <div className={css.switcher}>
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
            <path d="M6 1L2 6L6 11" stroke="#FF751D" strokeWidth="2" />
          </svg>
        </button>
        <p>Expenses</p>
        <button type="button" className={css.nextBtn} onClick={handleGoNext}>
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

      {categories && (
        <ul className={css.categories}>
          {categories.map(category => (
            <li key={category.id}>
              <Link to={`${url}/chart/${category.nameEng}`}>
                <CategoriesItem category={category} />
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Route path={`${path}/subCategory`}>{categories && <Chart />}</Route>
    </>
  );
};
