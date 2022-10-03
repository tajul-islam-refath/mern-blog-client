import "./homeLayout.scss";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import TopBar from "../../components/TopBar/TopBar";
import MainNav from "../../components/MainNav/MainNav";
import RightNav from "../../components/RightNav/RightNav";
import Footer from "../../components/Footer/Footer";

const HomeLayout = () => {
  console.log("Render dashboard...");
  return (
    <div className="home">
      <div className="container grid">
        <Header>
          <TopBar />
          <MainNav />
        </Header>
        <main className="main">
          <div className="col-md-8">
            <Outlet />
          </div>
          <div className="col-md-4">
            <RightNav />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default HomeLayout;
