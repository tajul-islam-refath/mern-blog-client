import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { userProfile } = useSelector((state) => state.user);
  const { isLogedIn } = useSelector((state) => state.auth);
  const history = useLocation();

  console.log(history);

  if (!userProfile) {
    return <Navigate to="/create-profile" state={{ from: history.location }} />;
  } else if (!isLogedIn) {
    return <Navigate to="/login" state={{ from: history.location }} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
