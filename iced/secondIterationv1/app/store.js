import {configureStore} from '@reduxjs/toolkit';
import {plansReducer, userReducer} from 'shared/reducers';

export default configureStore({
  reducer: {
    user: userReducer,
    plans: plansReducer,
  },
});