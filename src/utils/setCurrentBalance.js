export const setCurrentBalance = response => {
  return state => {
    return {
      ...state,
      user: { ...state.user, balance: response.data.currentBalance },
    };
  };
};
