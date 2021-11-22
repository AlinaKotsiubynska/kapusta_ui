import { useContext } from 'react';
import { Context } from 'components/Context';
import s from '../Avatar/Avatar.module.scss';

export const Avatar = () => {
  const { userContext } = useContext(Context);
  const firstLetter = userContext.user.name[0];
  return (
    <div className={s.avatarWrapper}>
      <span className={s.avatar}>{firstLetter}</span>
      <span className={s.line} />
    </div>
  );
};
