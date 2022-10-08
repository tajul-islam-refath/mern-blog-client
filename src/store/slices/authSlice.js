import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:
    localStorage.getItem("token") !== null
      ? JSON.parse(localStorage.getItem("token"))
      : "",
  isLogedIn: localStorage.getItem("token") !== null ? true : false,
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
      console.log(action.payload);
      state.isLoading = false;
      state.message = action.payload.message;
      state.otpInfo = {
        hash: action.payload.hash,
        email: action.payload.email,
      };
    },
    authLoginAction: (state, action) => {
      console.log(action.payload);
    },
    authRegisterAction: (state, action) => {},
    authLogoutAction: (state, action) => {},
    authErrorAction: (state, action) => {
      state.isError = true;
      state.message = action.payload.message;
    },
    authStateResetAction: (state, action) => {
      state.isError = false;
      state.message = "";
      state.isLoading = false;
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
