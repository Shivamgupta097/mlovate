import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const middleware = getDefaultMiddleware => {
  let middlewares = getDefaultMiddleware() || [];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }
  return middlewares;
};

export default configureStore({
  reducer,
  middleware,
});
