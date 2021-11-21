import PropTypes from 'prop-types';
import s from './CategoriesItem.module.scss';
import sprite from '../../../assets/icons/sprite.svg'
export const CategoriesItem = ({ category, activeCategory }) => {
  const iconClass = (category.nameEn === activeCategory) ? s.activeIcon : s.icon;
  const rectClass = (category.nameEn === activeCategory) ? s.activeRect : s.rect;
  return (
    <>
      <p>{category.value}</p>
      <div className={s.iconWrapper}>
        <span className={rectClass}></span>
        <svg className={iconClass} width='56' height='56'>
          <use href={`${sprite}#icon-${category.nameEn}`}></use>
        </svg>
      </div>
      <p>{category.name}</p>
    </>
  );
};
      
CategoriesItem.propTypes = {
  category: PropTypes.object.isRequired,
  activeCategory: PropTypes.string.isRequired
};