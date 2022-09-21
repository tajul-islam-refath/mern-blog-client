import "./recentpostitem.scss";
import { Link } from "react-router-dom";

function RecentPostItem() {
  return (
    <article className="recentPostItem">
      <Link className="thumb" to="/">
        <span className="fullimg cover"></span>
        <span className="fullimg fakelayout cover"></span>
      </Link>
      <div className="info">
        <h4 className="title underline-effect">
          <Link to="/">Far far away, behind the word mountains</Link>
        </h4>
        <span className="datetime"> August 15, 2019</span>
      </div>
    </article>
  );
}

export default RecentPostItem;
