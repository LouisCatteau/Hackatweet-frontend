import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [{name: '#Tweet', number:3},{name:'#test', number:1},{name:'#test', number:1}],
};

export const trendsSlice = createSlice({
  name: 'trends',
  initialState,
  reducers: {
    addTrendToStore: (state, action) => {
      const { name } = action.payload;
      const existingTrend = state.value.find(trend => trend.name === name);

      if (existingTrend) {
        existingTrend.number += 1;
      } else {
        state.value.push({ name, number: 1 });
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
