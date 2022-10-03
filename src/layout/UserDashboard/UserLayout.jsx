import "./userDashboard.scss";
import { Outlet } from "react-router-dom";
import SideNav from "../../dashboard/user/SideNav/SideNav";

const UserDashboard = () => {
  console.log("Render dashboard...");
  return (
    <section className="dashboardLayout">
      <div className="dashboardLayout__sidenav">
        <SideNav />
      </div>
      <div className="dashboardLayout__main">
        <Outlet />
      </div>
    </section>
  );
};

export default UserDashboard;
