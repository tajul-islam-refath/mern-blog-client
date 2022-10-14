import "./mainnav.scss";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authLogout } from "../../services/authServices";
const MainNav = () => {
  const { isLogedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(authLogout());
  };
  return (
    <nav className="mainnav">
      <ul className="mainnav__list">
        <li className="mainnav__list__item">
          <NavLink to="/home" className="mainnav__list__item--link">
            Home
          </NavLink>
        </li>
        <li className="mainnav__list__item">
          <NavLink to="/blogs" className="mainnav__list__item--link">
            Blogs
          </NavLink>
        </li>
        <li className="mainnav__list__item">
          <NavLink className="mainnav__list__item--link">#Tags</NavLink>
        </li>

        {isLogedIn ? (
          <li className="mainnav__list__item">
            <NavLink to="/user" className="mainnav__list__item--link">
              Dashboard
            </NavLink>
          </li>
        ) : null}

        {isLogedIn ? (
          <li className="mainnav__list__item">
            <Link
              to="/login"
              className="mainnav__list__item--link"
              onClick={logOut}>
              Logout
            </Link>
          </li>
        ) : (
          <li className="mainnav__list__item">
            <NavLink to="/login" className="mainnav__list__item--link">
              LogIn
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainNav;
