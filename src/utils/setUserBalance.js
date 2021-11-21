import { getCurrent } from 'components/Assets/Api/Api';

export const setUserBalance = async setUserContext => {
  const { data } = await getCurrent();
  console.log(data.user.balance);
  setUserContext(state => {
    const obj = {
      ...state,
      user: { balanse: data.user.balance, name: state.user.name },
    };
    console.log('obj', obj);
    return obj;
  });
};
