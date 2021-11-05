import { AssetsForm } from './AssetsForm/AssetsForm';
import { AssetsList } from './AssetsList/AssetsList';
import { AssetsSummary } from './AssetsSummary/AssetsSummary';

export const Assets = ({ tabKey }) => {
  return (
    <div>
      <AssetsForm />
      <AssetsList />
      <AssetsSummary />
    </div>
  );
};
