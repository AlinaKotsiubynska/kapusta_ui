import { useEffect } from 'react';
import { INCOMES, EXPENSES, REPORTS } from 'helpers/constants/routes.constants';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { AssetsBoard } from 'components/Assets/AssetsBoard';
import { Balance } from 'components/shared/Balance';
import styles from './AssetsWrapper.module.scss';
import { Context } from 'components/Context';
import { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { patchBalance } from 'components/Assets/Api/Api';

export const AssetsWrapper = () => {
  const TABS = [INCOMES, EXPENSES];
  const ROUTESNAMES = [INCOMES, EXPENSES];
  const { userContext } = useContext(Context);
  const { path } = useRouteMatch();
  const history = useHistory();
  const [balance, setBalance] = useState('');

  const onSubmitForm = async e => {
    e.preventDefault();
    await patchBalance({ balance });
  };

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
    if (userContext.user.balance) {
      setBalance(userContext.user.balance);
    }
  }, [userContext]);

  useEffect(() => {
    history.push(`${path}/${TABS[0]}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.body}>
      {ROUTESNAMES.map(tab => (
        <Route key={tab} path={path + '/' + tab}>
          <NavLink to={`${path}/${REPORTS}/${EXPENSES}`}>{REPORTS}</NavLink>
          <Balance
            balance={balance}
            setBalance={setBalance}
            onSubmitForm={onSubmitForm}
          />
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
    </div>
  );
};
