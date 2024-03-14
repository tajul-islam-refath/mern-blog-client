import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLogedIn } = useSelector((state) => state.auth);
  const history = useLocation();

  if (!isLogedIn) {
    return <Navigate to="/login" state={{ from: history.location }} />;
  }
  return children;
};

export default PrivateRoute;
