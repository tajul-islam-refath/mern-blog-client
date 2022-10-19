import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myProfile: localStorage.getItem("myProfile")
    ? JSON.parse(localStorage.getItem("myProfile"))
    : null,
  isLoading: false,
  isProfileCreated: false,
  isProfileUpdated: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoadingAction: (state, action) => {
      state.isLoading = true;
    },
    getMyProfileAction: (state, action) => {
      state.isLoading = false;
      state.myProfile = action.payload.profile;
    },
    createUserProfileAction: (state, action) => {
      state.isProfileCreated = true;
      state.isLoading = false;
      state.myProfile = action.payload.profile;
      state.message = action.payload.message;
    },
    clearUserStateAction: (state, action) => {
      state.isLoading = false;
      state.isProfileCreated = false;
      state.isProfileUpdated = false;
      state.message = "";
    },
    userErrorAction: (state, action) => {
      state.isLoading = false;
      state.message = action.message;
    },
  },
});

export const {
  userLoadingAction,
  getMyProfileAction,
  createUserProfileAction,
  clearUserStateAction,
  userErrorAction,
} = userSlice.actions;
export default userSlice.reducer;
