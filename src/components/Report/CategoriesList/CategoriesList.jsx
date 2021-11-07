// import { Link, useRouteMatch, useHistory, useLocation} from 'react-router-dom';
// import { useState, useEffect } from 'react';
import css from './CategoriesList.module.css';
import { CategoriesItem } from '../CategoriesItem';

export const CategoriesList = () => {
  // const [categories, setCategories] = useState(null);

  const handleGoPrevious = () => {
    console.log('go previous');
  };

  const handleGoNext = () => {
    console.log('go next');
  };
  // запрос на бэк за категориями и записать в стейт
  //  useEffect(() => {
  //   if (!query) return;
  //   fetchCategories().then(setCategories);
  // }, [query]);

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
      {/* 
      {categories && ( */}
      <ul className={css.categories}>
        <li key={1}>
          <CategoriesItem />
        </li>
        <li key={2}>
          <CategoriesItem />
        </li>
        <li key={3}>
          <CategoriesItem />
        </li>
        {/* {categories.map(catagory => (
            <li key={catagory.id}>
              <CategoriesItem />
            </li>
          ))} */}
      </ul>
    </>
  );
};
