import "./myPost.scss";
import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { getUserArticles } from "../../../services/postServices";

const MyPosts = () => {
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);

  const getPosts = async () => {
    let { payload, error } = await getUserArticles();
    if (payload) {
      setPosts(payload.articles);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="my-posts">
      <div className="container">
        <div className="header">
          <h1 className="header__title">Posts</h1>
          <Link className="header__btn" to="/user/new-post">
            New Post
          </Link>
        </div>
        <div className="row">
          {posts &&
            posts.map((post, i) => (
              <div className="col-md-6">
                <article className="postcard " key={i}>
                  <div className="top">
                    <Link className="thumb" to={`/posts/${post._id}`}>
                      <span
                        className="fullimg cover"
                        style={{
                          backgroundImage: `url(${post.thumbail})`,
                        }}></span>
                      <span
                        className="fullimg fakelayout cover"
                        style={{
                          backgroundImage: `url(${post.thumbail})`,
                        }}></span>
                    </Link>
                  </div>
                  <div className="info">
                    <h1 className="title underline-effect">
                      <Link to={`/posts/${post._id}`}>
                        {post.title.slice(0, 30) + "..."}
                      </Link>
                    </h1>
                    <div className="meta">
                      <span className="datetime">
                        {new Date(post.createdAt).toDateString()}
                      </span>
                      <div className="read-time">
                        <span>{post.readTime}</span>
                      </div>

                      <div className="meta__row">
                        <BsChat className="card-icon" />
                        <span>1</span>
                      </div>

                      <div className="meta__row">
                        <AiOutlineFire className="card-icon" />
                        <span>{post.totalViews}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
