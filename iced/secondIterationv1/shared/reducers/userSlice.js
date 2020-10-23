import {createSlice} from '@reduxjs/toolkit';
import store from 'store';

export const counterSlice = createSlice({
  name: 'user',
  initialState: {loggedIn: false, displayName: null},
  reducers: {
    logIn: (state, action) => {
      const {displayName} = action.payload;
      const newState = {loggedIn: true, displayName: displayName};
      store.set('user', newState);
      return newState;
    },
    logOut: (state) => {
      state.loggedIn = false;
      state.displayName = null;
      store.set('user', {loggedIn: false, displayName: null});
    },
  },
});

export const {logIn, logOut} = counterSlice.actions;

export const selectLoggedIn = state => state.user.loggedIn;
export const selectDisplayName = state => state.user.displayName;

export default counterSlice.reducer;