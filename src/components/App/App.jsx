import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthPage, HomePage, AssetsPage } from 'pages';
import { AUTH, HOME, ASSETS } from 'helpers/constants/routes.constants';
import s from './App.module.scss';

export default function App() {
  return (
    <div className={s.container}>
      <Switch>
        <Route path={`/${AUTH}`}>
          <AuthPage />
        </Route>
        <Route path={`/${HOME}`}>
          <HomePage />
        </Route>
        <Route path={`/${ASSETS}`}>
          <AssetsPage />
        </Route>
        <Redirect to={`/${AUTH}`} />
      </Switch>
    </div>
  );
}
