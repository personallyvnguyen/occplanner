import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid';

export const counterSlice = createSlice({
  name: 'plans',
  initialState: {},
  reducers: {
    createPlan: (state, action) => {
      const {planObj} = action.payload;
      const id = uuid();
      state[id] = planObj;
    },
    deletePlan: (state, action) => {
      const {id} = action.payload;
      delete state[id];
    },
    addClass: (state, action) => {
      const {id, classObj} = action.payload;
      state[id].classes[classObj.CRN] = classObj;
    },
    removeClass: (state, action) => {
      const {id, classObj} = action.payload;
      delete state[id].classes[classObj.CRN];
    },
  },
});

export const {
  createPlan, 
  deletePlan,
  addClass, 
  removeClass,
} = counterSlice.actions;

export const selectPlan = (state, id) => state[id];

export default counterSlice.reducer;