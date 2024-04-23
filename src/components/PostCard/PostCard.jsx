import "./postcard.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";

import toastService from "../../utils/Toast";
import avatar from "../../assets/img/avatar-10.jpg";
import Tag from "../Tag/Tag";
import {
  addPostToBookmark,
  removePostFromBookmark,
} from "../../services/postServices";

const PostCard = ({ post }) => {
  const { isLogedIn } = useSelector((state) => state.auth);
  let bookmarks = [];
  const dispatch = useDispatch();

  const bookmarksAdd = async () => {
    let { payload, error } = await addPostToBookmark(post._id);
    if (payload) {
      // log("Registration", "info", payload);

      toastService.success("Bookmarked successfully  🎉");
    }
    if (error) {
      toastService.error("Bookmarked faild!");
      // log("newPost", "error", error);
    }
  };
  const bookmarksDelete = async () => {
    let { payload, error } = await removePostFromBookmark(post._id);
    if (payload) {
      // log("Registration", "info", payload);

      toastService.success("Remove from bookmarked 🎉");
    }
    if (error) {
      toastService.error("Remove from bookmarked faild!");
      // log("newPost", "error", error);
    }
  };
  return (
    <>
      {post && (
        <article className="postcard">
          {post.cover.url && (
            <div className="postcard__cover">
              <img src={post.cover.url} alt="cover" />
            </div>
          )}

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
                {isLogedIn && (
                  <>
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
                  </>
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
