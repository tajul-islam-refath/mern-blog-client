import axios from "axios";
import {
  webContentGetAction,
  bookMarksPostAction,
  bookMarksDeleteAction,
  getSearchResultAction,
  clearWebStateAction,
} from "../store/slices/webSlice";

export const getArticlesService = async (page = 1, limit = 15) => {
  try {
    const { data } = await axios.get(`/articles/?page=${page}&limit=${limit}`);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const bookmarkPost = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/posts/bookmark-post`, formData);
    dispatch(bookMarksPostAction(data));
  } catch (error) {
    console.log(error);
    if (error.response.status === 500) {
      // dispatch(authErrorAction({ message: "Error ! Please try again" }));
    } else {
      // dispatch(authErrorAction(error.response.data));
    }
  }
};

export const bookmarkDelete = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/posts/bookmark-delete`, formData);
    dispatch(bookMarksDeleteAction(data));
  } catch (error) {
    console.log(error);
    if (error.response.status === 500) {
      // dispatch(authErrorAction({ message: "Error ! Please try again" }));
    } else {
      // dispatch(authErrorAction(error.response.data));
    }
  }
};

export const getSearchResult = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/posts/search`, formData);
    dispatch(getSearchResultAction(data));
  } catch (error) {
    console.log(error);
    if (error.response.status === 500) {
      // dispatch(authErrorAction({ message: "Error ! Please try again" }));
    } else {
      // dispatch(authErrorAction(error.response.data));
    }
  }
};

export const clearWebState = () => (dispatch) => {
  dispatch(clearWebStateAction());
};
