import { AssetsForm } from 'components/Assets/AssetsForm';
import { AssetsList } from 'components/Assets/AssetsList';
import { AssetsSummary } from 'components/Assets/AssetsSummary';
import { useState } from 'react';
import s from './AssetsBoard.module.scss';

export const AssetsBoard = ({ tabKey }) => {
  const [isUpdate, setUpdate] = useState(false);

  return (
    <div className={s.assets}>
      <AssetsForm tabKey={tabKey} setUpdate={setUpdate} />
      <div className={s.listsWrapper}>
        <AssetsList tabKey={tabKey} isUpdate={isUpdate} setUpdate={setUpdate} />
        <AssetsSummary />
      </div>
    </div>
  );
};
