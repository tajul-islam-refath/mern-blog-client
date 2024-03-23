import "./singlepost.scss";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";

import SinglePostSkeleton from "../../components/Skeleton/SinglePostSkeleton";
import Tag from "../../components/Tag/Tag";
import AppTitle from "../../components/Common/AppTitle";

import { getSinglePost } from "../../services/postServices";
import { bookmarkPost, bookmarkDelete } from "../../services/webService";
import toastService from "../../utils/Toast";
import { singlePostGetAction } from "../../store/slices/postSlice";

const SinglePost = () => {
  const { postId } = useParams();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.settings.loading);
  const post = useSelector((state) => state.post.post);
  const bookmarks = useSelector((state) => state.web.bookmarks);

  const bookmarksAdd = () => {
    dispatch(bookmarkPost({ id: post._id }));
  };

  const bookmarksDelete = () => {
    dispatch(bookmarkDelete({ id: post._id }));
  };

  const fatchPost = async () => {
    let { payload, error } = await getSinglePost(postId);
    if (payload) {
      dispatch(singlePostGetAction(payload.article));
    }
    if (error) {
      if (error.status == 400) {
        toastService.error(error.errors[0].message);
      } else {
        toastService.error("Internal server error. Try again!");
      }
    }
  };

  useEffect(() => {
    fatchPost();
  }, [postId]);

  return (
    <>
      <AppTitle title={`${post?.title || "Loading..."}`} />
      {post && !loading && (
        <article className="post">
          <div className="post__warper">
            <div className="post__header">
              <h1 className="post__title underline-effect">
                {<a>{post.title}</a>}
              </h1>
            </div>
            <div className="post__author underline-effect">
              <img
                src={
                  post.author.profileImage ? post.author.profileImage.url : ""
                }
                alt="avatar"
              />
              <div className="posr__author__name">
                <Link>{post.author.username}</Link>
                <div className="meta">
                  <span className="datetime">
                    {" "}
                    {new Date(post.createdAt).toDateString()}
                  </span>
                  <div className="read-time">
                    <span>{post.readTime}</span>
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
          </div>

          <div className="post__cover">
            <img src="" alt="" />
            <img className="fullimg cover" src={post?.cover?.url} alt="" />
          </div>
          <div className="post__warper">
            <div className="post__body">
              <div className="post__content">
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
          </div>
        </article>
      )}
      {loading && <SinglePostSkeleton />}
    </>
  );
};

export default SinglePost;
