import { Link } from 'react-router-dom';
import { HOME } from 'helpers/constants/routes.constants';
import s from './GoHomeButton.module.scss';

export const GoHomeLink = () => {
  return (
    <Link to={`/${HOME}`} className={s.backBtn}>
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
      <span className={s.goHome}>Вернуться на главную</span>
    </Link>
  );
};
