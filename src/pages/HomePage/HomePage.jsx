import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { EXPENSES, INCOMES, REPORTS } from 'helpers/constants/routes.constants';

export const HomePage = () => {
  const match = useRouteMatch();

  return (
    <>
      <h1>Home</h1>
      <Switch>
        <Route path={`${match.path}/${EXPENSES}`}>
          <p>EXPENSES</p>
        </Route>
        <Route path={`${match.path}/${INCOMES}`}>
          <p>INCOMES</p>
        </Route>
        <Route path={`${match.path}/${REPORTS}`}>
          <p>REPORTS</p>
        </Route>
        <Redirect to={`${match.path}/${EXPENSES}`} />
      </Switch>
    </>
  );
};
