import "./homeLayout.scss";
import { outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import TopBar from "../components/TopBar/TopBar";
import MainNav from "../components/MainNav/MainNav";
import RightNav from "../components/RightNav/RightNav";

const HomeLayout = () => {
  return (
    <div className="home">
      <div className="container grid">
        <Header>
          <TopBar />
          <MainNav />
        </Header>
        <main className="main">
          <div className="col-md-8">
            <outlet />
          </div>
          <div className="col-md-4">
            <RightNav />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
