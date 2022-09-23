import "./singlepost.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import avatar from "../../assets/img/avatar-10.jpg";
import Image from "../../assets/img/img1.jpg";
import Tag from "../../components/Tag/Tag";
import AppTitle from "../../components/Common/AppTitle";

const SinglePost = () => {
  const { postId } = useParams();

  return (
    <>
      <AppTitle title={"Far far away.."} />
      <section className="singlePost">
        <article className="article">
          <div className="top">
            <div className="thumb">
              <img src="" alt="" />
              <img className="fullimg cover" src={Image} alt="" />
            </div>
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
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusantium molestias eius quos,
              possimus ipsam doloremque error, vero laboriosam facere nemo
              molestiae maxime nesciunt est rem odit. Fugiat nisi accusantium
              asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Possimus quo recusandae magni sed fuga odit praesentium at
              sit alias sequi? Ipsam voluptas possimus eaque facilis veniam
              officia vitae recusandae tempora.
            </p>
          </div>
          <div className="footer">
            <p>Categorized in:</p>
            <div className="tags">
              <Tag text="Music" />
              <Tag text="Football" />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default SinglePost;
