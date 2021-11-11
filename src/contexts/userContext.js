import { createContext } from 'react';

const shape = {
  user: {
    token: '',
    email: '',
    balance: '',
  },
};

const userContext = createContext(shape);

export default userContext;
