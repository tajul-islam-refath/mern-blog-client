import "./recentpostitem.scss";
import { Link } from "react-router-dom";

function RecentPostItem({ item }) {
  console.log(item);
  return (
    <article className="recentPostItem">
      <Link className="thumb" to="/">
        <span
          className="fullimg cover"
          style={{
            backgroundImage: `url(${item.image})`,
          }}></span>
        <span className="fullimg fakelayout cover"></span>
      </Link>
      <div className="info">
        <h4 className="title underline-effect">
          <Link to="/">{item.title}</Link>
        </h4>
        <span className="datetime"> {item.date} </span>
      </div>
    </article>
  );
}

export default RecentPostItem;
