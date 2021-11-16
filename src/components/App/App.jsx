import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthPage, HomePage } from 'pages';
import { useState } from 'react';
import { Context } from 'components/Context';
import { AUTH, HOME } from 'helpers/constants/routes.constants';
import { USER_CONTEXT_DEFAULT } from 'helpers/constants/contexst.constants';
import s from './App.module.scss';
// import Header from './Header';
// import Modal from './../shared/Modal/Modal';

export default function App() {
  const [userContext, setUserContext] = useState(USER_CONTEXT_DEFAULT);
  const { authenticated } = userContext;
  return (
    <Context.Provider value={{ userContext, setUserContext }}>
      <div className={s.container}>
        <Switch>
          {authenticated ? (
            <Route path={`/${HOME}`}>
              <HomePage />
            </Route>
          ) : (
            <Route path={`/${AUTH}`}>
              <AuthPage />
            </Route>
          )}

          <Redirect to={`/${authenticated ? HOME : AUTH}`} />
        </Switch>
      </div>
    </Context.Provider>
  );
}
