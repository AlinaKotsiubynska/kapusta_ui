import { useContext } from 'react';
import { Context } from 'components/Context';

export const Avatar = () => {
  const { userContext } = useContext(Context);
  const firstLetter = userContext.user.name[0];
  return (
    <div>
      <span>{firstLetter}</span>
    </div>
  );
};
