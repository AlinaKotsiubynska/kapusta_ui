import { useHistory } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { Context } from '../Context/index';
import { token } from '../../utils/tokenOperations';

export default function AuthGoogle() {
  const history = useHistory();
  const { setUserContext, userContext } = useContext(Context);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const authorizedUser = {
      name: params.get('name'),
      userToken: params.get('token'),
      email: params.get('email'),
    };

    if (!authorizedUser.token) {
      history.push('/error');
    }
    if (authorizedUser.userToken) {
      token.set(authorizedUser.userToken);

      localStorage.setItem('token', JSON.stringify(authorizedUser.userToken));

      setUserContext(state => ({
        ...state,

        token: authorizedUser.userToken,
        authenticated: true,
        user: {
          ...state.user,
          name: authorizedUser.name,
        },
      }));

      history.push('/home/expenses');
    }
  });

  return (
    <div>
      <p>loading</p>
    </div>
  );
}
