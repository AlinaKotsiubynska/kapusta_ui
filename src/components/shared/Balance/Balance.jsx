import { useState, useContext, useEffect } from 'react';
import { Context } from 'components/Context';
import { patchBalance } from 'components/Assets/Api/Api';
import s from './Balance.module.scss';

export const Balance = ({ isDisabled = false }) => {
  const { userContext, setUserContext } = useContext(Context);
  const [balance, setBalance] = useState('');

  useEffect(() => {
    setBalance(userContext.user.balance);
  }, [userContext.user.balance]);

  const inputHandler = e => {
    const value = e.target.value;
    setBalance(value);
  };

  const onSubmitForm = async e => {
    e.preventDefault();
    const res = await patchBalance({ balance });
    setUserContext(state => {
      return {
        ...state,
        user: {
          ...state.user,
          balance: res.data.user.balance,
        },
      };
    });
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="input" className={s.label}>
          Баланс:
        </label>
        <span className={s.inputWrapper}>
          <input
            disabled={isDisabled}
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
        {!isDisabled && (
          <button type="submit" className={s.button}>
            Подтвердить
          </button>
        )}
      </form>
    </div>
  );
};
