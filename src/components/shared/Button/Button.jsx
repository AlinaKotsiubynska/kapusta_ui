import PropTypes from 'prop-types';
import s from './Button.module.scss';

export default function Button({ type, children, onClick }) {
  return (
    <button className={s.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};
