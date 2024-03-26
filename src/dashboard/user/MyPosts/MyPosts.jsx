import "./myPost.scss";
import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { getUserPosts } from "../../../services/postServices";
import FormGroup from "../../../components/ui/forms/FormGroup";
import FormInput from "../../../components/ui/forms/FormInput";

const MyPosts = () => {
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      let { payload, error } = await getUserPosts(page, limit, search);
      if (payload) {
        setPosts(payload.articles);
        setTotalPage(payload.pagination.totalPage);
      }
    };
    getPosts();
  }, [page, limit, search]);

  const onChangePage = (pageNumber) => {
    setPage(pageNumber);
  };

  // implement debounce for better control over the timing of search requests.
  const debounceSearch = useRef(null);
  const onSearch = (e) => {
    clearTimeout(debounceSearch.current);
    debounceSearch.current = setTimeout(() => {
      setSearch(e.target.value);
    }, 300);
  };

  const renderPagination = () => {
    const paginationItems = [];
    for (let i = 1; i <= totalPage; i++) {
      paginationItems.push(
        <span
          key={i}
          className={`${page === i ? "active" : ""}`}
          onClick={() => onChangePage(i)}>
          {i}
        </span>
      );
    }
    return paginationItems;
  };

  return (
    <div className="my-posts">
      <div className="container">
        <div className="header">
          <h1 className="header__title">Posts</h1>
          <div className="d-flex align-items-center">
            <FormGroup>
              <FormInput
                name="search"
                className="search-input"
                placeholder="Search.."
                onChange={onSearch}
              />
            </FormGroup>
            <Link className="header__btn" to="/user/new-post">
              New Post
            </Link>
          </div>
        </div>
        <div className="row">
          {posts &&
            posts.map((post, i) => (
              <div className="col-12 col-md-6" key={i}>
                <article className="postcard__two">
                  <div className="top">
                    <Link className="thumb" to={`/posts/${post._id}`}>
                      <span
                        className="fullimg cover"
                        style={{
                          backgroundImage: `url(${post?.cover?.url})`,
                        }}></span>
                      <span
                        className="fullimg fakelayout cover"
                        style={{
                          backgroundImage: `url(${post?.cover?.url})`,
                        }}></span>
                    </Link>
                  </div>
                  <div className="info">
                    <h1 className="title underline-effect">
                      <Link to={`/posts/${post._id}`}>
                        {post.title}
                        {/* {post.title.slice(0, 30) + "..."} */}
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
              </div>
            ))}
        </div>
        <div className="pagination">
          {page > 1 && (
            <span
              className={`prev ${page == 1 && "active"}`}
              onClick={() => onChangePage(page - 1)}>
              &larr;
            </span>
          )}
          {totalPage > 0 && renderPagination(totalPage)}
          {page < totalPage && (
            <span
              className={`next ${page == totalPage && "active"}`}
              onClick={() => onChangePage(page + 1)}>
              &rarr;
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
