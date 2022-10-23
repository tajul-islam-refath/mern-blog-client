import axios from "axios";
import {
  postLoadingAction,
  postCreateAction,
  singlePostGetAction,
  postErrorAction,
  clearPostStateAction,
} from "../store/slices/postSlice";

export const createNewPost = (formData) => async (dispatch) => {
  try {
    dispatch(postLoadingAction());

    const { data } = await axios.post("/posts/create", formData);

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

export const getSinglePost = (id) => async (dispatch) => {
  try {
    dispatch(postLoadingAction());
    const { data } = await axios.get(`/posts/${id}`);

    dispatch(singlePostGetAction(data));
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
