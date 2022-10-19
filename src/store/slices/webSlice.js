import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isContentLoading: false,
  posts: [],
  latestPosts: [],
  message: "",
};
const webSlice = createSlice({
  name: "web",
  initialState,
  reducers: {
    webContentLoadingAction: (state, action) => {
      state.isContentLoading = true;
    },
    webContentGetAction: (state, action) => {
      state.isContentLoading = false;
      state.posts = action.payload.posts;
      state.latestPosts = action.payload.latestPosts;
    },
    clearWebStateAction: (state, action) => {
      state.isContentLoading = false;
    },
  },
});

export const {
  webContentLoadingAction,
  webContentGetAction,
  clearWebStateAction,
} = webSlice.actions;

export default webSlice.reducer;
