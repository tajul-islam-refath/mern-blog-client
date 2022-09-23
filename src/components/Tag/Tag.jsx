import { Link } from "react-router-dom";
import "./Tag.scss";

const Tag = ({ text }) => {
  return (
    <Link className="tag hover-effect" to="/">
      {text}
    </Link>
  );
};

export default Tag;
