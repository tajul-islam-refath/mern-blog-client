import "./socialIcon.scss";
import { Link } from "react-router-dom";

const SocialIcon = ({ children, name }) => {
  return <Link className={`social-icon ${name}`}>{children}</Link>;
};

export default SocialIcon;
