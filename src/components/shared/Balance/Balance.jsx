import { useState } from 'react/cjs/react.development';
import styles from './Balance.module.scss';

export const Balance = () => {
  const [balance, setBalance] = useState(0);

  const formHandler = e => {
    e.preventDefault();
  };

  const inputHandler = e => {
    const value = e.target.value;
    setBalance(Number(value));
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={formHandler}>
        <label htmlFor="input" className={styles.input}>
          Баланс:
        </label>
        <input
          type="number"
          name="input"
          id="input"
          value={balance}
          onChange={inputHandler}
        />
        <button type="submit" className={styles.button}>
          Подтвердить
        </button>
      </form>
    </div>
  );
};
