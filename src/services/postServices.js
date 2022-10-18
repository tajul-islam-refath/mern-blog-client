import axios from "axios";
import {
  postLoadingAction,
  postCreateAction,
  postErrorAction,
  clearPostStateAction,
} from "../store/slices/postSlice";

export const createNewPost = (formData) => async (dispatch) => {
  try {
    dispatch(postLoadingAction());

    const { data } = await axios.post("/post/create", formData);

    dispatch(postCreateAction(data));
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 500) {
      dispatch(postErrorAction({ message: "Error ! Please try again later" }));
    } else {
      dispatch(postErrorAction(error.response.data));
    }
  }
};

export const clearPostState = () => (dispatch) => {
  dispatch(clearPostStateAction());
};
