import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const trendsSlice = createSlice({
  name: 'trends',
  initialState,
  reducers: {
    addTrendToStore: (state, action) => {
      const existingTrend = state.value.find(trend => trend.name === action.payload);

      if (existingTrend) {
        existingTrend.number += 1;
      } else {
        state.value.push({ name: action.payload, number: 1 });
      }
    },
    removeTrendFromStore: (state, action) => {
        const { name } = action.payload; 
        const existingTrendIndex = state.value.findIndex(trend => trend.name === name);
  
        if (existingTrendIndex !== -1) {
          const existingTrend = state.value[existingTrendIndex];
          if (existingTrend.number > 1) {
            existingTrend.number -= 1;
          } else {
            state.value.splice(existingTrendIndex, 1);
          }
        }
    },
  },
});

export const { addTrendToStore, removeTrendFromStore } = trendsSlice.actions;
export default trendsSlice.reducer;
