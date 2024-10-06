import { combineReducers } from 'redux';
import appReducer from './appReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  app: appReducer,
  list: orderReducer,
});
