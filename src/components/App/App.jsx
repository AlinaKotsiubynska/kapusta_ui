import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthPage, HomePage } from 'pages';
import { useState, useEffect } from 'react';
import { Context } from 'components/Context';
import { AUTH, HOME } from 'helpers/constants/routes.constants';
import { USER_CONTEXT_DEFAULT } from 'helpers/constants/contexst.constants';
import axios from 'axios';
import s from './App.module.scss';
// import Header from './Header';
// import Modal from './../shared/Modal/Modal';

export default function App() {
  const [userContext, setUserContext] = useState(USER_CONTEXT_DEFAULT);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      axios.defaults.baseURL = 'http://app-kapusta.herokuapp.com/api';
      axios.defaults.headers.common.Authorization = 'Bearer ' + token;
      axios
        .get('/users/current')
        .then(({ data }) => {
          setUserContext(state => {
            return {
              ...state,
              token,
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
  }, []);

  useEffect(() => {}, [userContext]);

  return (
    <Context.Provider value={{ userContext, setUserContext }}>
      <div className={s.container}>
        <Switch>
          <Route path={`/${AUTH}`}>
            <AuthPage />
          </Route>
          <Route path={`/${HOME}`}>
            <HomePage />
          </Route>
          <Redirect to={`/${AUTH}`} />
        </Switch>
      </div>
    </Context.Provider>
  );
}
