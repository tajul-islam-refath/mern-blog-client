import "./recentpost.scss";
import { useSelector } from "react-redux";
import NavTitle from "../NavTitle/NavTitle";
import RecentPostItem from "../RecentPostItem/RecentPostItem";

import { items } from "../../data/PostListItem";

function RecentPost({ title }) {
  let latestPosts = [];
  return (
    <div className="recent-post">
      <NavTitle text={title} />
      {latestPosts?.map((item, i) => (
        <RecentPostItem item={item} key={i} />
      ))}
    </div>
  );
}

export default RecentPost;
