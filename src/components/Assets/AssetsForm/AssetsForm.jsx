import Button from 'components/shared/Button';

const options = ['транспорт', 'еда', 'коммуналка', 'связь'];

export const AssetsForm = () => {
  return (
    <form>
      <input type="text" />
      <select size="1">
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
