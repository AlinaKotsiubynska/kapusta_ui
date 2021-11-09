import { useState } from 'react/cjs/react.development';
import styles from './Balance.module.scss';

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
    <div className={styles.wrapper}>
      <form onSubmit={formHandler}>
        <label htmlFor="input" className={styles.label}>
          Баланс:
        </label>
        <span className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="number"
            name="input"
            id="input"
            value={balance}
            onChange={inputHandler}
          />
          <span className={styles.marker}>UAH</span>
        </span>
        <button type="submit" className={styles.button}>
          Подтвердить
        </button>
      </form>
    </div>
  );
};
