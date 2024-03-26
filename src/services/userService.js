import axios from "axios";
import api from "../utils/Interceptors";
import {
  userLoadingAction,
  getMyProfileAction,
  createUserProfileAction,
  updateUserProfileAction,
  clearUserStateAction,
  userErrorAction,
} from "../store/slices/userSlice";

export const getProfile = async () => {
  try {
    const { data } = await api.get("/users/self");
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const updateUserProfile = async (formData) => {
  try {
    const { data } = await api.put("/users/profile", formData);
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const createUserProfile = (formData) => async (dispatch) => {
  try {
    dispatch(userLoadingAction());

    const { data } = await axios.post("/user/profile/create", formData);

    localStorage.setItem("myProfile", JSON.stringify(data.profile));
    dispatch(createUserProfileAction(data));
  } catch (error) {
    if (error.response.status === 500) {
      dispatch(userErrorAction({ message: "Error ! Please try again" }));
    } else {
      dispatch(userErrorAction(error.response.data));
    }
  }
};

export const clearUserState = () => (dispatch) => {
  dispatch(clearUserStateAction());
};
