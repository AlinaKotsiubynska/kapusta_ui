import { useEffect } from 'react';
import { INCOMES, EXPENSES, REPORTS } from 'helpers/constants/routes.constants';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router';
import { Assets } from 'components/Assets';
import { Balance } from 'components/shared/Balance';
import { AssetsTabs } from 'components/Assets/AssetsTabs';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const ROUTESNAMES = [INCOMES, EXPENSES, REPORTS];
  const { path } = useRouteMatch();
  const history = useHistory();

  const getComponent = tab => {
    switch (tab) {
      case INCOMES:
        return (
          <Assets tabKey={INCOMES}>
            <AssetsTabs path={path} />
          </Assets>
        );
      case EXPENSES:
        return (
          <Assets tabKey={EXPENSES}>
            <AssetsTabs path={path} />
          </Assets>
        );
      case REPORTS:
        return <div>reports</div>;
      default:
        break;
    }
  };
  useEffect(() => {
    history.push(`${path}/${INCOMES}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.homeBody}>
      <NavLink to={path + '/' + REPORTS}>{REPORTS}</NavLink>
      <Balance />
      <Switch>
        {ROUTESNAMES.map(tab => (
          <Route key={tab} path={path + '/' + tab}>
            {getComponent(tab)}
          </Route>
        ))}
        <Redirect to={path + '/' + EXPENSES} />
      </Switch>
    </div>
  );
};
