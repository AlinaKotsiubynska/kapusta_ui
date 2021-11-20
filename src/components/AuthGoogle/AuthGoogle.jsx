import { useHistory } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { Context } from '../Context/index';
import { token } from '../../utils/tokenOperations';
import axios from 'axios';

export default function AuthGoogle() {
  const history = useHistory();
  const { setUserContext } = useContext(Context);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const authorizedUser = {
      name: params.get('name'),
      token: params.get('token'),
      email: params.get('email'),
    };

    if (!authorizedUser.token) {
      history.push('/error');
    }
    if (authorizedUser.token) {
      token.set(authorizedUser.token);

      localStorage.setItem('token', JSON.stringify(authorizedUser.token));

      axios.get('/users/current').then(({ data: userInfo }) => {
        setUserContext(state => ({
          ...state,

          token: authorizedUser.token,
          authenticated: true,
          user: {
            ...state.user,
            balance: userInfo.user.balance,
            name: userInfo.user.name,
          },
        }));

        history.push('/home/expenses');
      });
    }
  });

  return (
    <div>
      <p>loading</p>
    </div>
  );
}
