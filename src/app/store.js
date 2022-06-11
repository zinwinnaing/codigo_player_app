import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const middleware = [
  ...getDefaultMiddleware({ serializableCheck: false }),
];

export default configureStore({
  reducer: rootReducer,
  middleware,
});
