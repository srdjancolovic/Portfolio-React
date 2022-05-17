import { createSlice } from '@reduxjs/toolkit';

const initialNavState = { navShown: false };

const navActionsSlice = createSlice({
  name: 'nav-actions',
  initialState: initialNavState,
  reducers: {
    show(state) {
      state.navShown = !state.navShown;
    },
  },
});

export const navActions = navActionsSlice.actions;

export default navActionsSlice.reducer;
