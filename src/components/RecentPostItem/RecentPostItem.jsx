import "./recentpostitem.scss";
import { Link } from "react-router-dom";

function RecentPostItem({ item }) {
  return (
    <article className="recentPostItem">
      <Link className="thumb" to="/">
        <span
          className="fullimg cover"
          style={{
            backgroundImage: `url(${item.thumbail})`,
          }}></span>
        <span className="fullimg fakelayout cover"></span>
      </Link>
      <div className="info">
        <h4 className="title underline-effect">
          <Link to={`/posts/${item._id}`}>{item.title}</Link>
        </h4>
        <span className="datetime">
          {" "}
          {new Date(item.createdAt).toDateString()}
        </span>
      </div>
    </article>
  );
}

export default RecentPostItem;
