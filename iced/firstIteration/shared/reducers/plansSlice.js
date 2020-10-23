import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'plans',
  initialState: [],
  reducers: {
    addPlan: (state, action) => {
      state.unshift(action.payload);
    },
    addClass: (state, action) => {
      const {id, classObj} = action.payload;
      const planPos = state.map(x => x.id).indexOf(id);
      state[planPos].classes.unshift(classObj);
    },
    removeClass: (state, action) => {
      const {id, classObj} = action.payload;
      const planPos = state.map(x => x.id).indexOf(id);
      const classPos = state[planPos].classes.map(x => x.section).indexOf(classObj.section);
      state[planPos].classes.splice(classPos, 1);
    },
  },
});

export const { addPlan, addClass, removeClass } = counterSlice.actions;

export const selectPlans = state => state.plans;

export default counterSlice.reducer;
