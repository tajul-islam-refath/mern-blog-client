import { Link } from "react-router-dom";
import "./Tag.scss";

const Tag = ({ text }) => {
  return (
    <Link className="tag" to="/">
      {text}
    </Link>
  );
};

export default Tag;
