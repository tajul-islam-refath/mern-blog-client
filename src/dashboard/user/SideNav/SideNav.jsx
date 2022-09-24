import "./sidenav.scss";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

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
      <ul className="list">
        <li className="list__listItem">
          <NavLink className="list__link">
            <MdDashboard className="list__icon" />
            <p className="list__name">Dashboard</p>
          </NavLink>
        </li>
        <li className="list__listItem">
          <NavLink className="list__link">
            <AiFillEdit className="list__icon" />
            <p className="list__name">Edit Profile</p>
          </NavLink>
        </li>
        <li className="list__listItem">
          <NavLink className="list__link">
            <IoIosCreate className="list__icon" />
            <p className="list__name">Create Post</p>
          </NavLink>
        </li>
        <li className="list__listItem">
          <NavLink className="list__link">
            <BsFillBookmarkCheckFill className="list__icon" />
            <p className="list__name">Bookmarks Post</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
