import api from "../utils/Interceptors";
import axios from "axios";
import {
  postLoadingAction,
  postCreateAction,
  singlePostGetAction,
  postErrorAction,
  clearPostStateAction,
} from "../store/slices/postSlice";

export const getUserArticles = async () => {
  try {
    const { data } = await api.get("/articles/author/self");
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
  }
};

export const createPost = async (formData) => {
  try {
    const { data } = await api.post("/articles", formData);
    return { payload: data.data, error: null };
  } catch (error) {
    return {
      payload: null,
      error: error?.response?.data,
    };
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
