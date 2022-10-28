import axios from "axios";
import {
  webContentLoadingAction,
  webContentGetAction,
  bookMarksPostAction,
  bookMarksDeleteAction,
  getSearchResultAction,
  clearWebStateAction,
} from "../store/slices/webSlice";

export const getWebContent =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(webContentLoadingAction());

      const { data } = await axios.get(`/web/?page=${page}`);
      dispatch(webContentGetAction(data));
    } catch (error) {
      console.log(error);
      if (error.response.status === 500) {
        // dispatch(authErrorAction({ message: "Error ! Please try again" }));
      } else {
        // dispatch(authErrorAction(error.response.data));
      }
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
