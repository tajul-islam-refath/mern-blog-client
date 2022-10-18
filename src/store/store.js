import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import postReducer from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    post: postReducer,
  },
});
