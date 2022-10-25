import "./singlepost.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";

import Tag from "../../components/Tag/Tag";
import AppTitle from "../../components/Common/AppTitle";

import { getSinglePost } from "../../services/postServices";
const SinglePost = () => {
  const { postId } = useParams();

  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    let load = false;

    if (!load) {
      dispatch(getSinglePost(postId));
      console.log("load");
    }

    return () => {
      load = true;
    };
  }, [postId, dispatch]);

  return (
    <>
      <AppTitle title={"Far far away.."} />
      {post && (
        <section className="singlePost">
          <article className="article">
            <div className="top">
              <div className="thumb">
                <img src="" alt="" />
                <img className="fullimg cover" src={post.thumbail} alt="" />
              </div>
              <div className="info">
                <h1 className="title underline-effect">
                  <Link to={`/posts/${123}`}>{post.title}</Link>
                </h1>
                <div className="meta">
                  <span className="datetime">
                    {" "}
                    {new Date(post.createdAt).toDateString()}
                  </span>
                  <div className="read-time">
                    <span>{post.readTime}</span>
                  </div>

                  <div className="meta__row">
                    <BsChat className="icon" />
                    <span>1</span>
                  </div>

                  <div className="meta__row">
                    <AiOutlineFire className="icon" />
                    <span>{post.totalViews}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="body">
              <div className="body__content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.body,
                  }}
                />
              </div>
            </div>
            <div className="footer">
              <p>Categorized in:</p>
              <div className="tags">
                {post.tags?.map((tag, i) => (
                  <Tag text={tag} key={i} />
                ))}
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default SinglePost;
