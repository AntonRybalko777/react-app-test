import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    users: [{ login: 'admin', password: 'admin' }],
    loggedUser: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.loggedUser = action.payload;
    },
    logOut: state => {
      state.isLoggedIn = false;
      state.loggedUser = null;
    },
  },
});
export const authReducer = AuthSlice.reducer;
export const { logIn, logOut } = AuthSlice.actions;
