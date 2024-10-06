let list = [];

const getItem = (state = list, action) => {
  switch (action.type) {
    case 'SELECT_ORDER':
      console.log(action.payload.data);
      return;
    default:
      return state;
  }
};

export default getItem;
