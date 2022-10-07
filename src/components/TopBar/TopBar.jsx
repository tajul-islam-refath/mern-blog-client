import "./topbar.scss";

import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const TopBar = ({ setSearchOpen }) => {
  return (
    <>
      <div id="topbar" className="topbar ">
        <div className="icons-groups">
          <FaFacebookF className="topbar__icon topbar__icon--facebook hover-effect" />
          <AiOutlineTwitter className="topbar__icon topbar__icon--twitter hover-effect" />
          <FaInstagramSquare className="topbar__icon topbar__icon--insta hover-effect" />
        </div>
        <div className="logo hover-effect">
          <Link to="/" className="logo__name">
            <span className="logo__word">M</span>
            ind
            <span className="logo__word">S</span>
            hare
          </Link>
        </div>
        <div className="search-box hover-effect">
          <AiOutlineSearch
            className="topbar__search--icon"
            onClick={() => setSearchOpen(true)}
          />
        </div>
      </div>
    </>
  );
};

export default TopBar;
