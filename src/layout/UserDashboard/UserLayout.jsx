import "./userDashboard.scss";
import { Outlet } from "react-router-dom";
import SideNav from "../../dashboard/user/SideNav/SideNav";

const UserDashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard__sidenav">
        <SideNav />
      </div>
      <div className="dashboard__main">
        <Outlet />
      </div>
    </section>
  );
};

export default UserDashboard;
