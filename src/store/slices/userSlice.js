import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: localStorage.getItem("userProfile")
    ? JSON.parse(localStorage.getItem("userProfile"))
    : null,
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
