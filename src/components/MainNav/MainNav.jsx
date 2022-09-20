import "./mainnav.scss";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="mainnav">
      <ul className="mainnav__list">
        <li className="mainnav__list__item">
          <NavLink className="mainnav__list__item--link">Home</NavLink>
        </li>
        <li className="mainnav__list__item">
          <NavLink className="mainnav__list__item--link">Blogs</NavLink>
        </li>
        <li className="mainnav__list__item">
          <NavLink className="mainnav__list__item--link">#Tags</NavLink>
        </li>
        <li className="mainnav__list__item">
          <NavLink className="mainnav__list__item--link">Dashboard</NavLink>
        </li>
        <li className="mainnav__list__item">
          <NavLink className="mainnav__list__item--link">LogIn</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
