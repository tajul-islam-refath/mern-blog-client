import axios from "axios";
import { store } from "../store/store";
import { loadingStart, loadingStop } from "../store/slices/settingSlice";
import storage from "./Storage";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", // our API base URL
});

let numberOfRequest = 0;

// Request interceptor for adding the bearer token
api.interceptors.request.use(
  (config) => {
    numberOfRequest++;
    store.dispatch(loadingStart());
    const token = storage.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    numberOfRequest--;
    if (numberOfRequest == 0) {
      store.dispatch(loadingStop());
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    numberOfRequest--;
    if (numberOfRequest == 0) {
      store.dispatch(loadingStop());
    }

    return response;
  },
  (error) => {
    numberOfRequest--;
    if (numberOfRequest == 0) {
      store.dispatch(loadingStop());
    }
    return Promise.reject(error);
  }
);

// Export the api instance
export default api;
