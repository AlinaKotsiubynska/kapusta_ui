import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { AuthPage, HomePage } from 'pages';
import { useState } from 'react';
import { Context } from 'components/Context';
import AuthGoogle from '../../components/AuthGoogle/AuthGoogle';
import {
  AUTH,
  HOME,
  AUTHORIZED,
  ERROR,
} from 'helpers/constants/routes.constants';
import { USER_CONTEXT_DEFAULT } from 'helpers/constants/contexst.constants';
import { useGetCurrentByToken } from 'utils';
import Header from 'components/Header/Header.jsx';
import s from './App.module.scss';


export default function App() {
  const [userContext, setUserContext] = useState(USER_CONTEXT_DEFAULT);
  const { authenticated } = userContext;

  useGetCurrentByToken(setUserContext);

  return (
    <Context.Provider value={{ userContext, setUserContext }}>
      <div className={s.container}>
        <Header />
        <Switch>
          {authenticated ? (
            <>
              <Route path={`/${HOME}`}>
                <HomePage />
              </Route>
              <Redirect to={`/${HOME}`} />
            </>
          ) : (
            <>
              <Route path={`/${AUTH}`}>
                <AuthPage />
              </Route>
              <Route path={`/${AUTHORIZED}`}>
                <AuthGoogle />
              </Route>
              <Route path={`/${ERROR}`}>
                <div>
                  <h1>Что-то пошло не так, попробуйте еще раз</h1>
                  <Link to={`/${AUTH}`}>Перейти</Link>
                </div>
              </Route>
              <Redirect to={`/${AUTH}`} />
            </>
          )}
        </Switch>
      </div>
    </Context.Provider>
  );
}
