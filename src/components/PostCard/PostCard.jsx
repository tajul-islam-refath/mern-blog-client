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

const PostCard = ({ post }) => {
  let bookmarks = [];
  const dispatch = useDispatch();
  const bookmarksAdd = () => {};
  const bookmarksDelete = () => {};
  return (
    <>
      {post && (
        <article className="postcard">
          <div className="postcard__cover">
            <img src={post.cover.url} alt="cover" />
          </div>
          <div className="postcard__body">
            <div className="postcard_user underline-effect">
              <img
                src={
                  post.author.profileImage
                    ? post.author.profileImage.url
                    : avatar
                }
                alt="avatar"
              />
              <div className="postcard_user__name">
                <Link>{post.author.username}</Link>
              </div>
            </div>
            <h1 className="postcard__title underline-effect">
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
            </h1>
            <div className="postcard__meta">
              <div className="postcard__meta__left">
                <span className="datetime">
                  {new Date(post.createdAt).toDateString()}
                </span>
                <div className="read-time">
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="postcard__meta__right">
                <div className="comment">
                  <BsChat className="comment-icon" />
                  <span>1</span>
                </div>

                {/* <div className="meta__row">
                  <AiOutlineFire className="card-icon" />
                  <span>{post.totalViews}</span>
                </div> */}
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

            <div className="tags col-md-8 row">
              {post.tags?.map((tag, i) => (
                <div className="col-md-8" key={i}>
                  <Tag text={tag} />
                </div>
              ))}
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default PostCard;
