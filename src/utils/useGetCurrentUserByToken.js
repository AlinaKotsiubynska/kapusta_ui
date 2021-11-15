import { useEffect } from 'react';
import axios from 'axios';

export const useGetCurrentByToken = setUserContext => {
  useEffect(() => {
    const currentToken = JSON.parse(localStorage.getItem('token'));
    if (currentToken) {
      axios.defaults.baseURL = 'http://app-kapusta.herokuapp.com/api';
      axios.defaults.headers.common.Authorization = 'Bearer ' + currentToken;
      axios
        .get('/users/current')
        .then(({ data }) => {
          setUserContext(state => {
            return {
              ...state,
              token: currentToken,
              user: {
                ...state.user,
                ...data.user,
              },
              authenticated: true,
            };
          });
        })
        .catch(err => console.log(err));
    }
    // eslint-disable-next-line
  }, []);
};
