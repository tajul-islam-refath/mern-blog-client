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

export const resetPassword = async (body) => {
  try {
    const { data } = await api.post("/auth/forgot-password", body);
    return { payload: data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const sendOtpToEmail = async (body) => {
  try {
    const { data } = await api.post("/auth/send-otp", body);
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const authLogout = () => (dispatch) => {
  localStorage.clear();
  dispatch(authLogoutAction());
};
