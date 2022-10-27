import "./postcard.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";

import avatar from "../../assets/img/avatar-10.jpg";
import Tag from "../Tag/Tag";

import { bookmarkPost } from "../../services/webService";

const PostCard = ({ post }) => {
  const bookmarks = useSelector((state) => state.web.bookmarks);
  const dispatch = useDispatch();

  const bookmarksAdd = () => {
    dispatch(bookmarkPost({ id: post._id }));
  };

  return (
    <>
      {post && (
        <article className="postcard">
          <div className="top">
            <Link className="thumb" to={`/posts/${123}`}>
              <span
                className="fullimg cover"
                style={{ backgroundImage: `url(${post.thumbail})` }}></span>
              <span
                className="fullimg fakelayout cover"
                style={{ backgroundImage: `url(${post.thumbail})` }}></span>
            </Link>
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

                {bookmarks.includes(post._id) ? (
                  <BsFillBookmarkFill className="bookmark-icon " />
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
                  __html: post.body.slice(0, 300),
                }}
              />
            </div>
          </div>
          <div className="footer">
            <div className="tags col-md-8 row">
              {post.tags?.map((tag, i) => (
                <div className="col-md-8" key={i}>
                  <Tag text={tag} />
                </div>
              ))}
              {/* <div className="col-md-3">
                <Tag text="Football" />
              </div> */}
            </div>
            <div className="user col-md-4 underline-effect">
              <img
                src={post.author.profilePic ? post.author.profilePic : avatar}
                alt="avatar"
              />
              <Link>{post.author.userName}</Link>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default PostCard;
