import axios from "axios";
import {
  authLoadingAction,
  authLoginAction,
  authLogoutAction,
  authRegisterAction,
  authErrorAction,
  authStateResetAction,
  authSendOtpAction,
} from "../store/slices/authSlice";

export const authLogin = (body) => async (dispatch) => {
  try {
    dispatch(authLoadingAction);

    const { data } = await axios.post("/auth/login", body);
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("MS_User", JSON.stringify(data.user));

    dispatch(authLoginAction(data));
  } catch (error) {
    if (error.response.status === 500) {
      dispatch(authErrorAction({ message: "Error ! Please try again" }));
    } else {
      dispatch(authErrorAction(error.response.data));
    }
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

export const authRegitation = (body) => async (dispatch) => {
  try {
    dispatch(authLoadingAction());

    const { data } = await axios.post("/auth/registation", body);
    dispatch(authRegisterAction(data));
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 500) {
      dispatch(authErrorAction({ message: "Error ! Please try again later" }));
    } else {
      dispatch(authErrorAction(error.response.data));
    }
  }
};

export const authLogout = () => (dispatch) => {
  localStorage.clear();
  dispatch(authLogoutAction());
};
