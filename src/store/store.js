import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import postReducer from "./slices/postSlice";
import webReducer from "./slices/webSlice";
import dashboardReducer from "./slices/dashboardSlice";
import settingReducer from "./slices/settingSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    web: webReducer,
    dashboard: dashboardReducer,
    settings: settingReducer,
  },
});
