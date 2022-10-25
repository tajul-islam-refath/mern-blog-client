import "./home.scss";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppTitle from "../../components/Common/AppTitle";
import PostCard from "../../components/PostCard/PostCard";

import { getWebContent } from "../../services/webService";
const Home = () => {
  const { posts, isContentLoading } = useSelector((state) => state.web);
  const dispatch = useDispatch();

  const logger = useRef(true);
  useEffect(() => {
    if (logger.current) {
      logger.current = false;
      dispatch(getWebContent());
    }
  }, []);
  return (
    <>
      <AppTitle title="MindShare-Home" />
      <section className="home">
        {posts.length > 0
          ? posts.map((post, i) => <PostCard key={i} post={post} />)
          : null}
      </section>
    </>
  );
};

export default Home;
