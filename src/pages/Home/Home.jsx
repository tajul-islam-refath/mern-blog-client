import "./home.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import AppTitle from "../../components/Common/AppTitle";
import PostCard from "../../components/PostCard/PostCard";

import { getArticlesService } from "../../services/webService";
import { getArticlesAction } from "../../store/slices/postSlice";

const Home = () => {
  const dispatch = useDispatch();

  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(15);
  const posts = useSelector((state) => state.post.posts);

  const getArticles = async () => {
    let {
      data: { articles, pagination },
      error,
    } = await getArticlesService(page, limit);
    // console.log(pagination);
    if (articles) {
      dispatch(getArticlesAction(articles));
    }

    if (pagination.next) {
      setPage(pagination.next);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <AppTitle title="DevCraft" />
      <section className="home">
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </section>
    </>
  );
};

export default Home;
