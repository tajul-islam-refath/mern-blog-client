import { createSlice } from "@reduxjs/toolkit";
import storage from "../../utils/Storage";

const initialState = {
  token: storage.get("token"),
  isLogedIn: storage.get("token") ? true : false,
  user: storage.get("dc_user"),
  otpInfo: storage.get("dc_otp") || {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSendOtpAction: (state, action) => {
      state.otpInfo = {
        hash: action.payload.hash,
        email: action.payload.email,
      };
    },
    authLoginAction: (state, action) => {
      state.isLogedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    authRegisterAction: (state, action) => {
      state.isLogedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    authLogoutAction: (state, action) => {
      state.isLogedIn = false;
      state.user = null;
      state.token = null;
    },
    authUserAction: (state, action) => {
      state.user = action.payload;
    },
    authErrorAction: (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload.message;
    },
    authStateResetAction: (state, action) => {
      state.isError = false;
      state.message = "";
      state.isLoading = false;
      state.isRegisterd = false;
    },
  },
});

export const {
  authLoadingAction,
  authLoginAction,
  authLogoutAction,
  authRegisterAction,
  authUserAction,
  authErrorAction,
  authStateResetAction,
  authSendOtpAction,
} = authSlice.actions;
export default authSlice.reducer;
