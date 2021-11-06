import Button from 'components/shared/Button';

const options = ['транспорт', 'еда', 'коммуналка', 'связь'];

export const AssetsForm = () => {
  const formHandler = e => {
    e.preventDefault();
    console.log(e.target.input.value);
    console.log(e.target.select.value);
  };
  return (
    <form onSubmit={formHandler}>
      <input type="text" name="input" />
      <select size="1" name="select">
        {options.map(el => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      <Button type="submit">ввод</Button>
      <Button type="button">очистить</Button>
    </form>
  );
};
