import axios from "axios";
import api from "../utils/Interceptors";
import {
  authLoadingAction,
  authLoginAction,
  authLogoutAction,
  authRegisterAction,
  authErrorAction,
  authStateResetAction,
  authSendOtpAction,
} from "../store/slices/authSlice";

import { getMyProfileAction } from "../store/slices/userSlice";

export const regitation = async (payload) => {
  try {
    const { data } = await api.post("/auth/signup", payload);
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const login = async (payload) => {
  try {
    const { data } = await api.post("/auth/signin", payload);
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const authSendOtp = (body) => async (dispatch) => {
  try {
    dispatch(authLoadingAction());

    const { data } = await axios.post("/auth/sendOTP", body);
    localStorage.setItem(
      "MS_otp",
      JSON.stringify({ hash: data.hash, email: data.email })
    );

    dispatch(authSendOtpAction(data));
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 500) {
      dispatch(authErrorAction({ message: "Error ! Please try again" }));
    } else {
      dispatch(authErrorAction(error.response.data));
    }
  }
};

export const authLogout = () => (dispatch) => {
  localStorage.clear();
  dispatch(authLogoutAction());
};
