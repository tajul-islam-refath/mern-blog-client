import "./homeLayout.scss";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/Header/Header";
import TopBar from "../../components/TopBar/TopBar";
import MainNav from "../../components/MainNav/MainNav";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";

import { getProfile } from "../../services/userService";
import { getWebContent } from "../../services/webService";

const HomeLayout = ({ children }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const { isLogedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <Header>
          {/* <TopBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} /> */}
          <MainNav />
        </Header>
        <main className="main">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
