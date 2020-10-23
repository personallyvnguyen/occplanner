import {configureStore} from '@reduxjs/toolkit';
import plansReducer from 'shared/reducers/plansSlice';
import userReducer from 'shared/reducers/userSlice';

export default configureStore({
  reducer: {
    plans: plansReducer,
    user: userReducer,
  },
});