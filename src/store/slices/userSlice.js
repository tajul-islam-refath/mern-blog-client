import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: {},
  isLoading: false,
  isProfileCreated: false,
  isProfileUpdated: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
