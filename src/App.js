import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "./scss/app.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute.jsx";
// import loader
import Loader from "./components/Loader/Loader.jsx";

const HomeLayout = React.lazy(() => import("./layout/home/HomeLayout.jsx"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Auth/Login/Login.jsx"));
const Registration = React.lazy(() =>
  import("./pages/Auth/Registration/Registration")
);
const SinglePost = React.lazy(() => import("./pages/SinglePost/SinglePost"));

// user Dashboard  pages
const UserDashboard = React.lazy(() =>
  import("./layout/UserDashboard/UserLayout")
);

const CreateProfile = React.lazy(() =>
  import("./pages/CreateProfile/CreateProfile")
);

const CreatePost = React.lazy(() =>
  import("./dashboard/user/CreatePost/CreatePost")
);

const EditProfile = React.lazy(() =>
  import("./dashboard/user/EditProfile/EditProfile")
);

const Dashboard = React.lazy(() =>
  import("./dashboard/user/Dashboard/Dashboard")
);

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />

      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Navigate to="home" replace={true} />} />
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="sign-up" element={<Registration />} />
              <Route path="posts/:postId" element={<SinglePost />} />
            </Route>

            {/* user dashboard */}
            <Route
              path="user"
              element={
                <PrivateRoute>
                  <UserDashboard />
                </PrivateRoute>
              }>
              <Route
                index
                element={<Navigate to="/user/dashboard" replace={true} />}
              />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="create-post" element={<CreatePost />} />
              <Route path="edit-profile" element={<EditProfile />} />
            </Route>
            <Route path="create-profile" element={<CreateProfile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
