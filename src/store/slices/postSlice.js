import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  post: null,
  posts: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postLoadingAction: (state, action) => {
      state.isPostLoading = true;
    },
    postCreateAction: (state, action) => {
      state.isPostCreated = true;
      state.isPostLoading = false;
      state.message = action.payload.message;
    },

    getArticlesAction: (state, action) => {
      state.posts = action.payload;
    },

    singlePostGetAction: (state, action) => {
      state.isPostLoading = false;
      state.post = action.payload.post;
    },
    postErrorAction: (state, action) => {
      state.isPostLoading = false;
      state.message = action.payload.message;
    },
    clearPostStateAction: (state, action) => {
      state.isPostCreated = false;
      state.isPostLoading = false;
      state.isPostUpdated = false;
      state.message = "";
    },
  },
});

export const {
  postLoadingAction,
  postCreateAction,
  postErrorAction,
  clearPostStateAction,
  singlePostGetAction,
  getArticlesAction,
} = postSlice.actions;
export default postSlice.reducer;
