import { AssetsForm } from './AssetsForm';
import { AssetsList } from './AssetsList';
import { AssetsSummary } from './AssetsSummary';
import styles from './Assets.module.scss';

export const Assets = ({ tabKey, children }) => {
  return (
    <>
      {children}
      <div className={styles.assets}>
        <AssetsForm />
        <div className={styles.listsWrapper}>
          <AssetsList />
          <AssetsSummary />
        </div>
      </div>
    </>
  );
};
