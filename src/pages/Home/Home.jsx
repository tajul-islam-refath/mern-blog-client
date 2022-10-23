import "./home.scss";
import { useSelector, useDispatch } from "react-redux";
import AppTitle from "../../components/Common/AppTitle";
import PostCard from "../../components/PostCard/PostCard";

const Home = () => {
  const { posts, isContentLoading } = useSelector((state) => state.web);
  return (
    <>
      <AppTitle title="MindShare-Home" />
      <section className="home">
        <PostCard />
        {posts.length > 0
          ? posts.map((post, i) => <PostCard key={i} post={post} />)
          : null}
        {/* <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard /> */}
      </section>
    </>
  );
};

export default Home;
