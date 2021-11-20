import { format } from 'date-fns';

export const getNormalizeData = data => {
  return data.map(el => {
    return {
      id: el._id,
      date: format(new Date(el.date), 'dd.MM.yyyy'),
      description: el.description,
      category: el.category.name,
      value: el.value,
    };
  });
};
