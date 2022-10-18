import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isPostLoading: false,
  isPostCreated: false,
  isPostUpdated: false,
  singlePost: {},
  posts: [],
  message: "",
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
} = postSlice.actions;
export default postSlice.reducer;
