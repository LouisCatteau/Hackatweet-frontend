import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { username:'LinkedinUser' , token : 's15v8qCIAFdyZh0-WUYZkwc11erDhYoi'  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token =  action.payload.token;
      state.value.username = action.payload.username;
    },
    logout: (state) => {
      state.value.token = '';
      state.value.username = '';
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;