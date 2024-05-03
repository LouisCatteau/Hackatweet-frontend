import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { username:'' , token : '', firstname : ""  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token =  action.payload.token;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
    },
    logout: (state) => {
      state.value.token = '';
      state.value.username = '';
      state.value.firstname = '';

    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;