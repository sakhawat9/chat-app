import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
