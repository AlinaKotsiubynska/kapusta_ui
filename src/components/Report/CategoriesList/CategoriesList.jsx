import { useState, useEffect } from 'react';
import css from './CategoriesList.module.css';
import { CategoriesItem } from '../CategoriesItem';
import { ChartHorizontal, ChartVertical } from '../Chart';
import debounce from 'lodash.debounce';

export const CategoriesList = ({ categories, handleSwitchPoint, point }) => {
  const [activeCategory, setActiveCategory] = useState('transport');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
  const title = point === 'expenses' ? 'РАСХОДЫ' : 'ДОХОДЫ';
  // const activeSubCategoriesObj = categories
  //   ? categories.find(item => item.nameEn === activeCategory) : {};
    const activeSubCategoriesObj = categories.find(item => item.nameEn === activeCategory);
  
  useEffect((e) => {
    window.addEventListener('resize', debounce(() => setWindowWidth(window.innerWidth),300));
    return window.removeEventListener('resize', debounce(() => setWindowWidth(window.innerWidth),300));
  }, []);

  useEffect(() => {
    if (point === 'expenses') {
      setActiveCategory('transport');
      return;
    }
    setActiveCategory('salary');
  }, [point]);

  const chooseCategory = subCategoriesNameEn => {
    setActiveCategory(subCategoriesNameEn);
  };

  return (
    <>
      <div className={css.switcher}>
        <button
          type="button"
          className={css.previousBtn}
          onClick={handleSwitchPoint}
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
        <p>{title}</p>
        <button
          type="button"
          className={css.nextBtn}
          onClick={handleSwitchPoint}
        >
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
        <>
          <ul className={css.categories}>
            {categories.map(category => (
              <li key={category._id}>
                <button onClick={() => chooseCategory(category.nameEn)}>
                  <CategoriesItem category={category} />
                </button>
              </li>
            ))}
          </ul>
          {activeSubCategoriesObj && (windowWidth <= 600) && <ChartHorizontal activeCategory={activeSubCategoriesObj} />}
          {activeSubCategoriesObj && (windowWidth > 600) && <ChartVertical activeCategory={activeSubCategoriesObj} />}
        </>
      )}
    </>
  );
};
