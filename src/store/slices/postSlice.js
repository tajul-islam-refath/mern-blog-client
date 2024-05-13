import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  post: null,
  posts: [],
  bookmarks: [],
  comments: [],
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
    getBookmarksAction: (state, action) => {
      state.bookmarks = action.payload;
    },
    updateBookmarksAction: (state, action) => {
      let index = state.bookmarks.indexOf(action.payload);
      if (index != -1) {
        state.bookmarks.splice(index, 1);
      } else {
        state.bookmarks.push(action.payload);
      }
    },
    getCommentsAction: (state, action) => {
      state.comments = action.payload;
    },
    addCommentAction: (state, action) => {
      state.comments = [action.payload, ...state.comments];
    },
    deleteCommentAction: (state, action) => {
      let filteredComments = state.comments.filter(
        (item) => item._id != action.payload
      );
      state.comments = filteredComments;
    },
  },
});

export const {
  singlePostGetAction,
  getPostsAction,
  getBookmarksAction,
  updateBookmarksAction,
  getCommentsAction,
  addCommentAction,
  deleteCommentAction,
} = postSlice.actions;
export default postSlice.reducer;
