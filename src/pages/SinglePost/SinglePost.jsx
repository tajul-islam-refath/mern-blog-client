import "./singlepost.scss";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";

import Tag from "../../components/Tag/Tag";
import AppTitle from "../../components/Common/AppTitle";

import { getSinglePost } from "../../services/postServices";
import { bookmarkPost, bookmarkDelete } from "../../services/webService";
const SinglePost = () => {
  const { postId } = useParams();

  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  const bookmarks = useSelector((state) => state.web.bookmarks);

  const bookmarksAdd = () => {
    dispatch(bookmarkPost({ id: post._id }));
  };

  const bookmarksDelete = () => {
    dispatch(bookmarkDelete({ id: post._id }));
  };

  let log = useRef(true);
  useEffect(() => {
    if (log.current) {
      log.current = false;
      dispatch(getSinglePost(postId));
    }
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
                  {<a>{post.title}</a>}
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

                  {bookmarks.includes(post._id) ? (
                    <BsFillBookmarkFill
                      className="bookmark-icon "
                      onClick={() => bookmarksDelete()}
                    />
                  ) : (
                    <BsBookmark
                      className="bookmark-icon "
                      onClick={() => bookmarksAdd()}
                    />
                  )}
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
