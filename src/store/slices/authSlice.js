import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:
    localStorage.getItem("token") !== null
      ? JSON.parse(localStorage.getItem("token"))
      : "",
  isLogedIn: localStorage.getItem("token") !== null ? true : false,
  isRegisterd: false,
  isLoading: false,
  isError: false,
  errors: {},
  user:
    localStorage.getItem("MS_User") !== null
      ? JSON.parse(localStorage.getItem("MS_User"))
      : {},
  otpInfo:
    localStorage.getItem("MS_otp") !== null
      ? JSON.parse(localStorage.getItem("MS_otp"))
      : null,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLoadingAction: (state, action) => {
      state.isLoading = true;
    },
    authSendOtpAction: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.otpInfo = {
        hash: action.payload.hash,
        email: action.payload.email,
      };
    },
    authLoginAction: (state, action) => {
      state.isLoading = false;
      state.isLogedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    authRegisterAction: (state, action) => {
      state.isLoading = false;
      state.isRegisterd = true;
      state.message = action.payload.message;
    },
    authLogoutAction: (state, action) => {
      state.isLogedIn = false;
      state.user = {};
      state.token = {};
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
  authErrorAction,
  authStateResetAction,
  authSendOtpAction,
} = authSlice.actions;
export default authSlice.reducer;
