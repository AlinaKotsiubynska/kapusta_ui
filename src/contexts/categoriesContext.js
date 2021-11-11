import { createContext } from 'react';

const shape = {
  data: [
    {
      _id: '',
      name: '',
      sign: '',
    },
  ],
};

const categoriesContext = createContext(shape);

export default categoriesContext;
