import { INCOMES, EXPENSES } from 'helpers/constants/routes.constants';
import { NavLink } from 'react-router-dom';
import styles from './AssetsTabs.module.scss';

export const AssetsTabs = ({ path }) => {
  const TABS = [INCOMES, EXPENSES];

  return TABS.map(tab => (
    <NavLink
      exact
      key={tab}
      to={path + '/' + tab}
      className={styles.navlink}
      activeClassName={styles.activenavlink}
    >
      {tab}
    </NavLink>
  ));
};
