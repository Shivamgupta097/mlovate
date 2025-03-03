let loaderCount = 0;

const counterReducer = (
  state = {
    sideBarOpen: false,
    apiLoading: false,
    pageLoading: false,
  },
  action,
) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      loaderCount++;
      return {
        ...state,
        sideBarOpen: !state.sideBarOpen,
      };
    case 'START_LOADER':
      loaderCount++;
      return {
        ...state,
        apiLoading: true,
      };
    case 'STOP_LOADER':
      loaderCount--;
      if (loaderCount <= 0) {
        loaderCount = 0;
        return {
          ...state,
          apiLoading: false,
        };
      }
      return state;
    case 'START_PAGE_LOADER':
      return {
        ...state,
        pageLoading: true,
      };
    case 'STOP_PAGE_LOADER':
      return {
        ...state,
        pageLoading: false,
      };
    default:
      return { ...state };
  }
};
export default counterReducer;
