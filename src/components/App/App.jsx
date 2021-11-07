import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthPage, HomePage } from 'pages';
import { AUTH, HOME, REPORTS } from 'helpers/constants/routes.constants';
import { ReportPage } from 'components/Report/ReportPage';
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
        <Route path={`/${REPORTS}`}>
          <ReportPage />
        </Route>
        <Redirect to={`/${AUTH}`} />
      </Switch>
    </div>
  );
}
