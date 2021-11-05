import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { LOGIN, SIGNUP } from 'helpers/constants/routes.constants';

export const AuthPage = () => {
  const match = useRouteMatch();

  return (
    <>
      <h1>Auth</h1>
      <Switch>
        <Route path={`${match.path}/${LOGIN}`}>
          <p>Login Form</p>
        </Route>
        <Route path={`${match.path}/${SIGNUP}`}>
          <p>Sign Up Form</p>
        </Route>
        <Redirect to={`${match.path}/${LOGIN}`} />
      </Switch>
    </>
  );
};
