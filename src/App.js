import "./scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/home/HomeLayout.jsx";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login.jsx";
import Registration from "./pages/Auth/Registration/Registration";
import SinglePost from "./pages/SinglePost/SinglePost";
import UserDashboard from "./layout/UserDashboard/UserLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Registration />} />
            <Route path="posts/:postId" element={<SinglePost />} />
          </Route>

          {/* user dashboard */}
          <Route path="user" element={<UserDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
