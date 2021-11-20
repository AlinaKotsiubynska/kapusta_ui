import { AssetsForm } from 'components/Assets/AssetsForm';
import { AssetsList } from 'components/Assets/AssetsList';
import { AssetsSummary } from 'components/Assets/AssetsSummary';
import styles from './Assets.module.scss';

export const AssetsBoard = ({ tabKey }) => {
  return (
    <div className={styles.assets}>
      <AssetsForm tabKey={tabKey} />
      <div className={styles.listsWrapper}>
        <AssetsList />
        <AssetsSummary />
      </div>
    </div>
  );
};
