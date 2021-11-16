import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthPage, HomePage } from 'pages';
import { useState } from 'react';
import { Context } from 'components/Context';
import { AUTH, HOME } from 'helpers/constants/routes.constants';
import { USER_CONTEXT_DEFAULT } from 'helpers/constants/contexst.constants';
import s from './App.module.scss';
import Header from 'components/Header/Header.jsx';

export default function App() {
  const [userContext, setUserContext] = useState(USER_CONTEXT_DEFAULT);

  return (
    <Context.Provider value={{ userContext, setUserContext }}>
      <div className={s.container}>
        <Header />
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
