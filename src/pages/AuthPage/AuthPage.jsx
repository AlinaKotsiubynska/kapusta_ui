import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { LOGIN, SIGNUP } from 'helpers/constants/routes.constants';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';

export const AuthPage = () => {
  const match = useRouteMatch();

  return (
    <>
      <h1>Auth</h1>
      <Switch>
        <Route path={`${match.path}/${LOGIN}`}>
          <p>Login Form</p>
          <LoginForm />
        </Route>
        <Route path={`${match.path}/${SIGNUP}`}>
          <p>Sign Up Form</p>
          <SignupForm />
        </Route>
        <Redirect to={`${match.path}/${LOGIN}`} />
      </Switch>
    </>
  );
};
