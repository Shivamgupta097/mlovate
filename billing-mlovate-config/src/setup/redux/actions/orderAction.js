export const orderBilling = item => {
  return {
    type: 'SELECT_ORDER',
    payload: {
      id: item.id,
      data: { item: item },
    },
  };
};
