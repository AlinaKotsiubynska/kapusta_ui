import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import s from './CategoriesList.module.scss';
import { CategoriesItem } from '../CategoriesItem';
import { ChartHorizontal, ChartVertical } from '../Chart';
import { fetchDataByDate } from 'services/reports-api';
import debounce from 'lodash.debounce';
import toast from 'react-hot-toast'

export const CategoriesList = ({ selectedMonth, selectedYear, handleSwitchPoint, point, allCategories }) => {
  const [activeCategory, setActiveCategory] = useState('transport');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [categories, setCategories] = useState([]);
  const title = point === 'expenses' ? 'РАСХОДЫ' : 'ДОХОДЫ';
  const activeSubCategoriesObj = categories.find(item => item.nameEn === activeCategory);
  
  useEffect((e) => {
    window.addEventListener('resize', debounce(() => setWindowWidth(window.innerWidth), 300));

    return window.removeEventListener('resize', debounce(() => setWindowWidth(window.innerWidth),300));
  }, []);

   useEffect(() => {
     (async function getData() {
       try {
         const categoriesByDate = await fetchDataByDate(
           selectedYear,
           selectedMonth,
           point
         );
         if (!allCategories || !categoriesByDate) return;
         const dataByCategories = allCategories.map(category => {
           const dataByCategory = categoriesByDate.find(
             item => item.categoryName === category.name,
           );
           const value = dataByCategory ? dataByCategory.value : '0';
           const url = `/img/${category.nameEn}.svg`;
           const subCategories = dataByCategory
             ? dataByCategory.subCategories
             : [];
           const fullCategory = { ...category, value, url, subCategories };
           return fullCategory;
         });
         return setCategories(dataByCategories);
       } catch {toast.error('Something went wrong');}
    })();
  }, [selectedMonth, selectedYear, point, allCategories]);

  useEffect(() => {
    if (point === 'expenses') {
      setActiveCategory('transport');
      return;
    }
    setActiveCategory('salary');
  }, [point]);
  
  const chooseCategory = (e,subCategoriesNameEn) => {
    e.preventDefault();
    setActiveCategory(subCategoriesNameEn);
  };

  return (
    <>
      <div className={s.switcher}>
        <button
          type="button"
          className={s.previousBtn}
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
          className={s.nextBtn}
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
          <ul className={s.categories}>
            {categories.map(category => (
              <li key={category._id}>
                <button type="button" onClick={(e) => chooseCategory(e, category.nameEn)}>
                  <CategoriesItem category={category} activeCategory={ activeCategory}/>
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

CategoriesList.propTypes = {
  selectedMonth: PropTypes.number.isRequired,
  selectedYear: PropTypes.number.isRequired,
  handleSwitchPoint: PropTypes.func.isRequired,
  point: PropTypes.string.isRequired,
  allCategories: PropTypes.array.isRequired,
};
