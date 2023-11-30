import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, login: 'admin', password: 'admin' },
  reducers: {
    logIn: state => {
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.isLoggedIn = false;
    },
  },
});
export const authReducer = AuthSlice.reducer;
export const { logIn, logOut } = AuthSlice.actions;
