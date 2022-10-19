import axios from "axios";
import {
  webContentLoadingAction,
  webContentGetAction,
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

export const clearWebState = () => (dispatch) => {
  dispatch(clearWebStateAction());
};
