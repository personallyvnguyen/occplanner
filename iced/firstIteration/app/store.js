import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'shared/reducers/userSlice';
import plansReducer from 'shared/reducers/plansSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    plans: plansReducer,
  },
});
