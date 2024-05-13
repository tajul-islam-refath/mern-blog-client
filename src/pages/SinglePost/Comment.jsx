import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

import {
  createNewComment,
  deleteComment,
  getCommentsByPost,
} from "../../services/postServices";
import {
  addCommentAction,
  deleteCommentAction,
  getCommentsAction,
} from "../../store/slices/postSlice";

import Button from "../../components/ui/buttons/Button";
import toastService from "../../utils/Toast";
function Comment({ postId }) {
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLogedIn = useSelector((state) => state.auth.isLogedIn);
  const comments = useSelector((state) => state.post.comments);

  const addComment = async () => {
    let { payload, error } = await createNewComment(postId, { body });
    if (payload) {
      dispatch(addCommentAction(payload.comment));
      toastService.success(payload.message);
      setBody("");
    }
    if (error) {
      toastService.error("Comment faild!");
    }
  };

  const onDelete = async (commentId) => {
    let { payload, error } = await deleteComment(postId, commentId);
    if (payload) {
      dispatch(deleteCommentAction(payload.commentId));
      toastService.success(payload.message);
    }
    if (error) {
      toastService.error("Comment delete faild!");
    }
  };

  return (
    <div className="post__comment-warper m-5">
      <h1>Top Comments ({comments.length})</h1>
      {isLogedIn && (
        <div className="post__comment ">
          <img
            src={user.profileImage ? user.profileImage.url : ""}
            alt="avatar"
          />
          <div className="posr__comment__body w-50">
            <div className="form-group mt-0">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                cols="20"
                value={body}
                onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <Button
              type="button"
              text="Submit"
              className="hover-effect"
              onClick={addComment}
            />
          </div>
        </div>
      )}

      {comments.map((comment) => (
        <div className="post__comment underline-effect">
          <img
            src={comment.user.profileImage ? comment.user.profileImage.url : ""}
            alt="avatar"
          />
          <div className="posr__comment__body">
            <Link>{comment.user.username}</Link>
            <h2 className="meta">{comment.body}</h2>
          </div>
          <MdDelete
            className="delete-icon "
            onClick={() => onDelete(comment._id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Comment;
