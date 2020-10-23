import { createSlice } from '@reduxjs/toolkit';
import store from 'store';

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    name: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.loggedIn = true;
      state.name = action.payload;
      store.set('user', {
        loggedIn: true,
        name: action.payload 
      })
    },
    logOut: state => {
      state.loggedIn = false;
      state.name = null;
      store.set('user', {
        loggedIn: false,
        name: null,
      })
    },
  },
});

export const { logIn, logOut } = counterSlice.actions;

export const selectLoggedIn = state => state.user.loggedIn;
export const selectName = state => state.user.name;

export default counterSlice.reducer;
