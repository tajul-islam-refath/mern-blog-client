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

export const authLogin = () => (dispatch) => {
  try {
    dispatch(authLoadingAction);
  } catch (e) {}
};

export const authSendOtp = (body) => async (dispatch) => {
  try {
    dispatch(authLoadingAction);

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
      dispatch(authErrorAction(error.response.data.message));
    }
  }
};

export const authRegitation = (body) => async (dispatch) => {
  try {
    dispatch(authLoadingAction);

    const { data } = await axios.post("/auth/regitation", body);
  } catch (e) {}
};
