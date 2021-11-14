import { useEffect } from 'react';
import { INCOMES, EXPENSES, REPORTS } from 'helpers/constants/routes.constants';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router';
import { Assets } from 'components/Assets';
import { Balance } from 'components/shared/Balance';
import { ReportPage } from 'components/Report/ReportPage';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const TABS = [INCOMES, EXPENSES];
  const ROUTESNAMES = [INCOMES, EXPENSES];
  const { path } = useRouteMatch();
  const history = useHistory();

  const getComponent = tab => {
    switch (tab) {
      case INCOMES:
        return <Assets tabKey={INCOMES} />;
      case EXPENSES:
        return <Assets tabKey={EXPENSES} />;
      default:
        break;
    }
  };
  useEffect(() => {
    history.push(`${path}/${TABS[0]}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.homeBody}>
      <NavLink to={path + '/' + REPORTS + '/expenses'}>{REPORTS}</NavLink>
      <Balance />
      {TABS.map(tab => (
        <NavLink
          key={tab}
          to={path + '/' + tab}
          className={styles.navlink}
          activeClassName={styles.activenavlink}
        >
          {tab}
        </NavLink>
      ))}
      <Switch>
        {ROUTESNAMES.map(tab => (
          <Route key={tab} path={path + '/' + tab}>
            {getComponent(tab)}
          </Route>
        ))}
        <Route key={REPORTS} path={`${path}/${REPORTS}/:point`}>
          <ReportPage />
        </Route>
        <Redirect to={path + '/' + EXPENSES} />
      </Switch>
    </div>
  );
};
