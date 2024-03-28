import "./mainnav.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "../../services/authServices";

const MainNav = () => {
  const { isLogedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(authLogout());
    navigate("/login");
  };
  return (
    <nav className="mainnav">
      <div className="logo hover-effect">
        <Link to="/" className="logo__name">
          <span className="logo__word">D</span>
          EV
          <span className="logo__word">C</span>
          RAFT
        </Link>
      </div>
      <ul className="mainnav__list">
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
        <AiOutlineSearch className="search--icon" />
      </ul>
    </nav>
  );
};

export default MainNav;
