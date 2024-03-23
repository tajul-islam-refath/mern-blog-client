import { createSlice } from "@reduxjs/toolkit";
import storage from "../../utils/Storage";

const initialState = {
  profile: storage.get("dc_user"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userProfileAction: (state, action) => {
      state.profile = action.payload;
    },
    updateUserProfileAction: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const {
  userLoadingAction,
  userProfileAction,
  createUserProfileAction,
  updateUserProfileAction,
  clearUserStateAction,
  userErrorAction,
} = userSlice.actions;
export default userSlice.reducer;
