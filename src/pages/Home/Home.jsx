import "./home.scss";
import { useRef } from "react";
import { useSelector } from "react-redux";

import HomePageSkeleton from "../../components/Skeleton/HomePageSkeleton";
import AppTitle from "../../components/Common/AppTitle";
import PostCard from "../../components/PostCard/PostCard";

import useHomeState from "./useHomeState";
import PostFeed from "../../components/PostFeed/PostFeed";

const Home = () => {
  const observerTarget = useRef(null);
  const posts = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.settings.loading);

  useHomeState(observerTarget);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, clientHeight, scrollHeight } =
  //       document.documentElement;
  //     if (scrollTop + clientHeight >= scrollHeight - 20 && page) {
  //       fetchPosts();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [page]);

  return (
    <>
      <AppTitle title="DevCraft" />
      <section className="home">
        <PostFeed posts={posts} />
      </section>
      <div ref={observerTarget}>{loading && <HomePageSkeleton />}</div>
    </>
  );
};

export default Home;
