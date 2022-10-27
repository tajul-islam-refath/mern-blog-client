import axios from "axios";
import {
  userLoadingAction,
  getMyProfileAction,
  createUserProfileAction,
  updateUserProfileAction,
  clearUserStateAction,
  userErrorAction,
} from "../store/slices/userSlice";

export const getMyProfile = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/user/profile/me");
    console.log(data);
    localStorage.setItem("myProfile", JSON.stringify(data.profile));
    dispatch(getMyProfileAction(data));
  } catch (error) {
    if (error.response.status === 500) {
      dispatch(userErrorAction({ message: "Error ! Please try again" }));
    } else {
      dispatch(userErrorAction(error.response.data));
    }
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

export const updateUserProfile = (formData) => async (dispatch) => {
  try {
    dispatch(userLoadingAction());

    const { data } = await axios.put("/user/profile/update", formData);

    localStorage.setItem("myProfile", JSON.stringify(data.profile));
    dispatch(updateUserProfileAction(data));
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
