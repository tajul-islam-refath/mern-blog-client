import React from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";

// set base url and header
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.headers.common["Authorization"] =
  localStorage.getItem("token") !== null
    ? JSON.parse(localStorage.getItem("token"))
    : "";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
