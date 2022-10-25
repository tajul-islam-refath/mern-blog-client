import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalViews: 0,
  totalPosts: 0,
  latestPosts: [],
  myPosts: [],
  bookmarksPosts: [],
  isDashboardLoading: false,
  message: "",
  isError: false,
};

const dashboardReducer = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    loadingDashboardAction: (state, action) => {
      state.isDashboardLoading = true;
    },
    getDashboardAction: (state, action) => {
      state.isDashboardLoading = false;
      state.totalPosts = action.payload.totalPost;
      state.totalViews = action.payload.totalViews;
      state.latestPosts = action.payload.latestPosts;
    },
    errorDashboardAction: (state, action) => {
      state.isDashboardLoading = false;
      state.message = action.payload.message;
      state.isError = true;
    },
    clearDashboardAction: (state, action) => {
      state.isDashboardLoading = false;
      state.message = action.payload.message;
      state.isError = false;
    },
  },
});

export const {
  loadingDashboardAction,
  getDashboardAction,
  errorDashboardAction,
  clearDashboardAction,
} = dashboardReducer.actions;
export default dashboardReducer.reducer;
