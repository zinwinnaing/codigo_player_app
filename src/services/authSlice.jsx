import { createSlice } from "@reduxjs/toolkit";
import { LOGIN_LABEL } from "../variables/constants";

const initialState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: () => {
      return {
        ...initialState,
        isAuthenticated: true,
      };
    },
    logout: () => {
      localStorage.removeItem(LOGIN_LABEL);
      return {
        ...initialState,
        isAuthenticated: false,
      };
    },
  },

  extraReducers: {},
});

const authReducer = authSlice.reducer;

export const { login, logout } = authSlice.actions;

export const authSelector = (state) => state?.auth;

export default authReducer;
