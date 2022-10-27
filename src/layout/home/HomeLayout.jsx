import "./homeLayout.scss";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import TopBar from "../../components/TopBar/TopBar";
import MainNav from "../../components/MainNav/MainNav";
import RightNav from "../../components/RightNav/RightNav";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import Loader from "../../components/Loader/Loader";

import { getMyProfile } from "../../services/userService";
import { getWebContent } from "../../services/webService";

const HomeLayout = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const { isLogedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogedIn) {
      dispatch(getMyProfile());
    }
  }, [dispatch, isLogedIn]);

  const logger = useRef(true);
  useEffect(() => {
    if (logger.current) {
      logger.current = false;
      dispatch(getWebContent());
    }
  }, []);

  return (
    <div className="home">
      {searchOpen ? (
        <Search searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      ) : null}

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
