import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  post: null,
  posts: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostsAction: (state, action) => {
      state.posts = action.payload;
    },
    singlePostGetAction: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { singlePostGetAction, getPostsAction } = postSlice.actions;
export default postSlice.reducer;
