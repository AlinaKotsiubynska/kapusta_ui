export const CategoriesItem = ({ category }) => {
  return (
    <>
      <p>{category.value}</p>
      <img src={category.url} alt={category.name} />
      <p>{category.name}</p>
    </>
  );
};
