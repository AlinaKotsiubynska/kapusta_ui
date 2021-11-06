import { useState } from 'react/cjs/react.development';

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
    <div>
      <form onSubmit={formHandler}>
        <label htmlFor="input">Баланс:</label>
        <input
          type="number"
          name="input"
          id="input"
          value={balance}
          onChange={inputHandler}
        />
        <button type="submit">Подтвердить</button>
      </form>
    </div>
  );
};
