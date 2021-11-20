import { EXPENSES, REPORTS } from 'helpers/constants/routes.constants';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { ReportPage } from 'components/Report/ReportPage';
import { AssetsWrapper } from 'components/Assets/AssetsWrapper';

export const HomePage = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`}>
        <AssetsWrapper />
      </Route>
      <Route key={REPORTS} path={`${path}/${REPORTS}/:point`}>
        <ReportPage />
      </Route>
      <Redirect to={path + '/' + EXPENSES} />
    </Switch>
  );
};
