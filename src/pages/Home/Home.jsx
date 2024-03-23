import "./home.scss";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import HomePageSkeleton from "../../components/Skeleton/HomePageSkeleton";
import AppTitle from "../../components/Common/AppTitle";
import PostCard from "../../components/PostCard/PostCard";

import { getPostsAction } from "../../store/slices/postSlice";
import { getPosts } from "../../services/postServices";
import { log } from "../../utils/Log";

const Home = () => {
  const dispatch = useDispatch();

  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);

  const posts = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.settings.loading);

  const fetchPosts = async () => {
    let { payload, error } = await getPosts({ page, limit });

    if (payload) {
      dispatch(getPostsAction([...posts, ...payload?.articles]));
      setPage(payload?.pagination?.next);
    }
    if (error) {
      // log("home", "error", error);
    }
  };

  useEffect(() => {
    fetchPosts();
    return () => {
      dispatch(getPostsAction([]));
    };
  }, []);

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

  const observerTarget = useRef(null);
  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting && page && !loading) {
          fetchPosts();
        }
      });
    });

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [page, loading]);

  return (
    <>
      <AppTitle title="DevCraft" />
      <section className="home">
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </section>
      <div ref={observerTarget}>{loading && <HomePageSkeleton />}</div>
    </>
  );
};

export default Home;
