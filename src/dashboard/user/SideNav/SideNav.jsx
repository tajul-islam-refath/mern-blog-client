import "./sidenav.scss";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

const SideNav = () => {
  const profile = useSelector((state) => state.user.myProfile);
  return (
    <nav className="user-sidenav">
      <div className="logo hover-effect">
        <Link to="/" className="logo__name">
          <span className="logo__word">D</span>
          EV
          <span className="logo__word">C</span>
          RAFT
        </Link>
      </div>

      <ul className="list">
        <li className="list__item">
          <NavLink to="/user/dashboard" className="list__link">
            <MdDashboard className="list__icon" />
            <p className="list__name">Dashboard</p>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/user/profile" className="list__link">
            <AiFillEdit className="list__icon" />
            <p className="list__name">Profile</p>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/user/posts" className="list__link">
            <FaList className="list__icon" />
            <p className="list__name">Posts</p>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/user/bookmarks" className="list__link">
            <BsFillBookmarkCheckFill className="list__icon" />
            <p className="list__name">Bookmarks</p>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/user/change-password" className="list__link">
            <MdOutlinePassword className="list__icon" />
            <p className="list__name">Change Password</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
