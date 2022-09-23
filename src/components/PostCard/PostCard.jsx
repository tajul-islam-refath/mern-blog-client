import "./postcard.scss";
import { Link } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import avatar from "../../assets/img/avatar-10.jpg";
import Tag from "../Tag/Tag";

const PostCard = () => {
  return (
    <article className="postcard">
      <div className="top">
        <Link className="thumb" to={`/posts/${123}`}>
          <span className="fullimg cover"></span>
          <span className="fullimg fakelayout cover"></span>
        </Link>
        <div className="info">
          <h1 className="title underline-effect">
            <Link to={`/posts/${123}`}>
              Far far away, behind the word mountains
            </Link>
          </h1>
          <div className="meta">
            <span className="datetime"> August 15, 2019</span>
            <div className="read-time">
              <span>2 min read</span>
            </div>

            <div className="meta__row">
              <BsChat className="icon" />
              <span>1</span>
            </div>

            <div className="meta__row">
              <AiOutlineFire className="icon" />
              <span>120</span>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <p className="body__content">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right…
        </p>
      </div>
      <div className="footer">
        <div className="tags col-md-8">
          <div className="col-md-3">
            <Tag text="Music" />
          </div>
          <div className="col-md-3">
            <Tag text="Football" />
          </div>
        </div>
        <div className="user col-md-4 underline-effect">
          <img src={avatar} alt="avatar" />
          <Link>Tajul Isalm Refath</Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
