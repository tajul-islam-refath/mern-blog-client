import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPostsAction } from "../../store/slices/postSlice";
import { getPosts } from "../../services/postServices";
import { log } from "../../utils/Log";

const useHomeState = (observerTarget) => {
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);

  const posts = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.settings.loading);

  const dispatch = useDispatch();

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
  }, [dispatch]);

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
};

export default useHomeState;
