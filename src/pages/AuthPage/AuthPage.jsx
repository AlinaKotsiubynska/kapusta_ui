import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { LOGIN, SIGNUP } from 'helpers/constants/routes.constants';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';
import { Hero } from 'components/Hero';

export const AuthPage = () => {
  const match = useRouteMatch();

  return (
    <section>
      <Hero/>
      <Switch>
        <Route path={`${match.path}/${LOGIN}`}>
          <LoginForm />
        </Route>
        <Route path={`${match.path}/${SIGNUP}`}>
          <SignupForm />
        </Route>
        <Redirect to={`${match.path}/${LOGIN}`} />
      </Switch>
    </section>
  );
};
