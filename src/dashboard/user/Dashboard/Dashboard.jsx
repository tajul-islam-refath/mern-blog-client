import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFileEarmarkPost } from "react-icons/bs";
import { FaStreetView } from "react-icons/fa";
import Card from "./Card/Card";
import "./dashboard.scss";

import {
  getDashboardContent,
  clearDashboardState,
} from "../../../services/dashboardServices";
import LatestPost from "./LatestPost/LatestPost";

const Dashboard = () => {
  const { totalPosts, totalViews, latestPosts } = useSelector(
    (state) => state.dashboard
  );
  const dispatch = useDispatch();

  const flag = useRef(true);
  useEffect(() => {
    if (flag.current) {
      flag.current = false;
      dispatch(getDashboardContent());
    }
  }, []);

  return (
    <div className="userDashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card
              title="Total posts"
              count={totalPosts}
              className="green"
              Icon={BsFileEarmarkPost}
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Total Views"
              count={totalViews}
              className="red"
              Icon={FaStreetView}
            />
          </div>
          {/* <div className="col-md-4">
            <Card className="purple" />
          </div> */}
        </div>
        <LatestPost />
      </div>
    </div>
  );
};

export default Dashboard;
