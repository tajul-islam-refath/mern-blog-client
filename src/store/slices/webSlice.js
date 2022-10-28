import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isContentLoading: false,
  posts: [],
  latestPosts: [],
  bookmarks: [],
  isBookmarked: false,
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
      state.bookmarks = action.payload.bookmarks;
    },
    bookMarksPostAction: (state, action) => {
      state.isBookmarked = true;
      state.bookmarks.push(action.payload.id);
      state.message = action.payload.message;
    },
    bookMarksDeleteAction: (state, action) => {
      state.isBookmarked = true;
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark !== action.payload.id
      );
      state.message = action.payload.message;
    },
    clearWebStateAction: (state, action) => {
      state.isContentLoading = false;
      state.isBookmarked = false;
      state.message = "";
    },
  },
});

export const {
  webContentLoadingAction,
  webContentGetAction,
  bookMarksPostAction,
  bookMarksDeleteAction,
  clearWebStateAction,
} = webSlice.actions;

export default webSlice.reducer;
