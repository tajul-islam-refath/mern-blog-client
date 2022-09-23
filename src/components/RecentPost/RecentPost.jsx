import "./recentpost.scss";
import NavTitle from "../NavTitle/NavTitle";
import RecentPostItem from "../RecentPostItem/RecentPostItem";

import { items } from "../../data/PostListItem";

function RecentPost() {
  return (
    <div className="recent-post">
      <NavTitle text="Recent Posts" />
      {items.map((item, i) => (
        <RecentPostItem item={item} key={i} />
      ))}
    </div>
  );
}

export default RecentPost;
