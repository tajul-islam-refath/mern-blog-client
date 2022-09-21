import NavTitle from "../NavTitle/NavTitle";
import RecentPostItem from "../RecentPostItem/RecentPostItem";
import "./recentpost.scss";

function RecentPost() {
  return (
    <div className="recent-post">
      <NavTitle text="Recent Posts" />
      <RecentPostItem />
      <RecentPostItem />
      <RecentPostItem />
      <RecentPostItem />
    </div>
  );
}

export default RecentPost;
