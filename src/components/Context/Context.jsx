import { createContext } from 'react';
import { USER_CONTEXT_DEFAULT } from 'helpers/constants/contexst.constants';

export const Context = createContext({
  userContext: USER_CONTEXT_DEFAULT,
  setUserContext: () => {},
});
