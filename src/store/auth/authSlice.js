import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: "",
  isLogedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
    },
    logout: (state, action) => {},
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
