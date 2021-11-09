import { AssetsForm } from './AssetsForm/AssetsForm';
import { AssetsList } from './AssetsList/AssetsList';
import { AssetsSummary } from './AssetsSummary/AssetsSummary';
import styles from './Assets.module.scss';

export const Assets = ({ tabKey }) => {
  return (
    <div className={styles.assets}>
      <AssetsForm />
      <div className={styles.listsWrapper}>
        <AssetsList />
        <AssetsSummary />
      </div>
    </div>
  );
};
