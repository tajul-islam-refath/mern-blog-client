import "./sidenav.scss";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <nav className="user-sidenav">
      <div className="logo hover-effect">
        <Link to="/" className="logo__name">
          <span className="logo__word">M</span>
          ind
          <span className="logo__word">S</span>
          hare
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
