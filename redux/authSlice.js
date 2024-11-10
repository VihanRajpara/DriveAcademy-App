import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoggedIn: false,
  user: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.errorMessage = null;
      AsyncStorage.setItem('isLoggedIn', 'true');
      AsyncStorage.setItem('token',`Vihan ${action.payload.token}`)
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.errorMessage = action.payload;
      AsyncStorage.setItem('isLoggedIn', 'false');
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      AsyncStorage.removeItem('isLoggedIn');
      AsyncStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
