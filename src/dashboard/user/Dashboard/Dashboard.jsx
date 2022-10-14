import { BsFileEarmarkPost } from "react-icons/bs";
import { FaStreetView } from "react-icons/fa";
import Card from "./Card/Card";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="userDashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card
              title="Total posts"
              count="20"
              className="green"
              Icon={BsFileEarmarkPost}
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Total Views"
              count="150"
              className="red"
              Icon={FaStreetView}
            />
          </div>
          {/* <div className="col-md-4">
            <Card className="purple" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
