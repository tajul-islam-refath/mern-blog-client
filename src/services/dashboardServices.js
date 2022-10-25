import axios from "axios";
import {
  loadingDashboardAction,
  getDashboardAction,
  errorDashboardAction,
  clearDashboardAction,
} from "../store/slices/dashboardSlice";

export const getDashboardContent = () => async (dispatch) => {
  try {
    dispatch(loadingDashboardAction());
    const { data } = await axios.get("/web/dashboard");
    console.log(data);
    dispatch(getDashboardAction(data));
  } catch (error) {
    if (error.response.status === 500) {
      dispatch(errorDashboardAction({ message: "Error ! Please try again" }));
    } else {
      dispatch(errorDashboardAction(error.response.data));
    }
  }
};

export const clearDashboardState = () => async (dispatch) => {
  dispatch(clearDashboardAction());
};
