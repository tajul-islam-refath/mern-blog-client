import "./homeLayout.scss";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import TopBar from "../../components/TopBar/TopBar";
import MainNav from "../../components/MainNav/MainNav";
import RightNav from "../../components/RightNav/RightNav";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";

const HomeLayout = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="home">
      {searchOpen ? <Search /> : null}

      <div className="container grid">
        <Header>
          <TopBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
          <MainNav />
        </Header>
        <main className="main">
          <div className="col-md-8 main__body">
            <Outlet />
          </div>
          <div className="col-md-4 main__nav">
            <RightNav />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default HomeLayout;
