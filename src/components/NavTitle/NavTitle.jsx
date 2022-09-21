import "./navtitle.scss";

const NavTitle = ({ text }) => {
  return (
    <h4 className="nav-title">
      <span className="nav-title__text">{text}</span>
      <span className="nav-title__border"></span>
    </h4>
  );
};

export default NavTitle;
