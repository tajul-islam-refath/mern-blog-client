import "./scss/app.scss";
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import loader
import Loader from "./components/Loader/Loader.jsx";

import HomeLayout from "./layout/home/HomeLayout.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Dashboard from "./dashboard/user/Dashboard/Dashboard";
import HomePageSkeleton from "./components/Skeleton/HomePageSkeleton.jsx";
import Login from "./pages/Auth/Login/Login.jsx";
import Registration from "./pages/Auth/Registration/Registration";
import SinglePostSkeleton from "./components/Skeleton/SinglePostSkeleton.jsx";

const Home = React.lazy(() => import("./pages/Home/Home"));
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

const Profile = React.lazy(() => import("./dashboard/user/Profile/Profile"));

const MyPosts = React.lazy(() => import("./dashboard/user/MyPosts/MyPosts"));

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

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to="home" replace={true} />} />
            <Route
              path="home"
              element={
                <HomeLayout>
                  <Suspense fallback={<HomePageSkeleton />}>
                    <Home />
                  </Suspense>
                </HomeLayout>
              }
            />
            <Route
              path="posts/:postId"
              element={
                <Suspense fallback={<SinglePostSkeleton />}>
                  <HomeLayout>
                    <SinglePost />
                  </HomeLayout>
                </Suspense>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Registration />} />
          </Route>
          {/* user dashboard */}
          <Route
            path="user"
            element={
              <PrivateRoute>
                <Suspense fallback={<Loader />}>
                  <UserDashboard />
                </Suspense>
              </PrivateRoute>
            }>
            <Route
              index
              element={<Navigate to="/user/dashboard" replace={true} />}
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="new-post" element={<CreatePost />} />
            <Route path="profile" element={<Profile />} />
            <Route path="posts" element={<MyPosts />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
