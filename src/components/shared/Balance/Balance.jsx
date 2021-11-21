import { useState } from 'react/cjs/react.development';
import s from './Balance.module.scss';

export const Balance = () => {
  const [balance, setBalance] = useState('');

  const formHandler = e => {
    e.preventDefault();
  };

  const inputHandler = e => {
    const value = e.target.value;
    setBalance(value);
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={formHandler}>
        <label htmlFor="input" className={s.label}>
          Баланс:
        </label>
        <span className={s.inputWrapper}>
          <input
            className={s.input}
            type="number"
            name="input"
            id="input"
            value={balance}
            onChange={inputHandler}
          />
          <span className={s.marker}>UAH</span>
        </span>
        <button type="submit" className={s.button}>
          Подтвердить
        </button>
      </form>
    </div>
  );
};
