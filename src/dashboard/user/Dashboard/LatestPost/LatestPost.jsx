import React from "react";
import { useSelector } from "react-redux";
import "./latestpost.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import Tag from "../../../../components/Tag/Tag";

const LatestPost = () => {
  const latestPosts = useSelector((state) => state.dashboard.latestPosts);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="latest-post">
      <h2> My Latest Post </h2>
      <Slider {...settings} className="slider">
        {latestPosts &&
          latestPosts.map((post, i) => (
            <article className="postcard " key={i}>
              <div className="top">
                <Link className="thumb" to={`/posts/${post._id}`}>
                  <span
                    className="fullimg cover"
                    style={{ backgroundImage: `url(${post.thumbail})` }}></span>
                  <span
                    className="fullimg fakelayout cover"
                    style={{ backgroundImage: `url(${post.thumbail})` }}></span>
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
          ))}
      </Slider>
    </div>
  );
};

export default LatestPost;
