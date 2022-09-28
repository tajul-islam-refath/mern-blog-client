import "./scss/app.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "./layout/home/HomeLayout.jsx";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login.jsx";
import Registration from "./pages/Auth/Registration/Registration";
import SinglePost from "./pages/SinglePost/SinglePost";

// Dashboard user pages
import UserDashboard from "./layout/UserDashboard/UserLayout";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import CreatePost from "./dashboard/user/CreatePost/CreatePost";
import EditProfile from "./dashboard/user/EditProfile/EditProfile";
import Dashboard from "./dashboard/user/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
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
          <Route path="user" element={<UserDashboard />}>
            <Route
              index
              element={<Navigate to="/user/dashboard" replace={true} />}
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create-post" element={<CreatePost />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Route>
          <Route path="create-profile" element={<CreateProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
