import { useEffect } from 'react';
import { INCOMES, EXPENSES } from 'helpers/constants/routes.constants';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';

export const AssetsPage = () => {
  const TABS = [INCOMES, EXPENSES];
  const { path } = useRouteMatch();
  const history = useHistory();

  const getComponent = tab => {
    switch (tab) {
      case INCOMES:
        return <div>'INCOMES'</div>;
      case EXPENSES:
        return <div>'EXPENSES'</div>;
      default:
        break;
    }
  };
  useEffect(() => {
    history.push(`${path}/${TABS[0]}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>'Balanse'</div>
      {TABS.map(tab => (
        <NavLink key={tab} to={path + '/' + tab}>
          {tab}
        </NavLink>
      ))}
      <Switch>
        {TABS.map(tab => (
          <Route key={tab} path={path + '/' + tab}>
            {getComponent(tab)}
          </Route>
        ))}
      </Switch>
    </div>
  );
};
