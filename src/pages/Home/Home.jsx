import "./home.scss";
import AppTitle from "../../components/Common/AppTitle";
import PostCard from "../../components/PostCard/PostCard";

const Home = () => {
  return (
    <>
      <AppTitle title="MindShare-Home" />
      <section className="home">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </>
  );
};

export default Home;
