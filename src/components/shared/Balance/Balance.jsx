import styles from './Balance.module.scss';

export const Balance = ({ balance, setBalance, onSubmitForm }) => {
  const inputHandler = e => {
    const value = e.target.value;
    setBalance(value);
  };
  console.log('balance', balance);
  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="input" className={styles.label}>
          Баланс:
        </label>
        <span className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="number"
            name="input"
            id="input"
            step="0.01"
            value={balance}
            onChange={inputHandler}
            placeholder="0.00"
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
