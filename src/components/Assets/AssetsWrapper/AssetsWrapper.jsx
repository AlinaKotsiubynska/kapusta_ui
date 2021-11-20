import { useEffect } from 'react';
import { INCOMES, EXPENSES, REPORTS } from 'helpers/constants/routes.constants';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { AssetsBoard } from 'components/Assets/AssetsBoard';
import { Balance } from 'components/shared/Balance';
import styles from './AssetsWrapper.module.scss';

export const AssetsWrapper = () => {
  const TABS = [INCOMES, EXPENSES];
  const ROUTESNAMES = [INCOMES, EXPENSES];
  const { path } = useRouteMatch();
  const history = useHistory();

  const getComponent = tab => {
    switch (tab) {
      case INCOMES:
        return <AssetsBoard tabKey={INCOMES} />;
      case EXPENSES:
        return <AssetsBoard tabKey={EXPENSES} />;
      default:
        break;
    }
  };
  useEffect(() => {
    history.push(`${path}/${TABS[0]}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.body}>
      {/* <Switch> */}
      {ROUTESNAMES.map(tab => (
        <Route key={tab} path={path + '/' + tab}>
          <NavLink to={`${path}/${REPORTS}/${EXPENSES}`}>{REPORTS}</NavLink>
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
          {getComponent(tab)}
        </Route>
      ))}
      {/* </Switch> */}
    </div>
  );
};
