import { configureStore } from '@reduxjs/toolkit';
import navActionsReducer from './navActions';
const store = configureStore({
  reducer: { navActions: navActionsReducer },
});

export default store;
