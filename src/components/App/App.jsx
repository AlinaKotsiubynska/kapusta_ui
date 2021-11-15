import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { AuthPage, HomePage } from 'pages';
import { useState } from 'react';
import { Context } from 'components/Context';
import AuthGoogle from '../../components/AuthGoogle/AuthGoogle';
import { AUTH, HOME, AUTHORIZED } from 'helpers/constants/routes.constants';
import { USER_CONTEXT_DEFAULT } from 'helpers/constants/contexst.constants';
import { useGetCurrentByToken } from 'utils';
import s from './App.module.scss';

export default function App() {
  const [userContext, setUserContext] = useState(USER_CONTEXT_DEFAULT);

  useGetCurrentByToken(setUserContext);

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
          <Route path={`/${AUTHORIZED}`}>
            <AuthGoogle />
          </Route>
          <Route path={`/error`}>
            <h1>Что-то пошло не так, попробуйте еще раз</h1>
            <Link to={`${AUTH}`}>Перейти</Link>
          </Route>
          <Redirect to={`/${AUTH}`} />
        </Switch>
      </div>
    </Context.Provider>
  );
}
