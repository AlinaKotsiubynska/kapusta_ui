import s from './Balance.module.scss';

export const Balance = ({ balance, setBalance, onSubmitForm }) => {
  const inputHandler = e => {
    const value = e.target.value;
    setBalance(value);
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="input" className={s.label}>
          Баланс:
        </label>
        <span className={s.inputWrapper}>
          <input
            className={s.input}
            type="number"
            name="input"
            id="input"
            step="0.01"
            value={balance}
            onChange={inputHandler}
            placeholder="0.00"
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
