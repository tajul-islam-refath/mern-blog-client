import "./search.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getSearchResult } from "../../services/webService";
const Search = ({ searchOpen, setSearchOpen }) => {
  const searchResults = useSelector((state) => state.web.searchResults);
  const dispatch = useDispatch();

  const closeSearchBox = () => {
    setSearchOpen(false);
  };

  const onSearch = (event) => {
    dispatch(getSearchResult({ term: event.target.value }));
  };

  return (
    <section className="search" id="search">
      <div className="container">
        <div className="search__close">
          <button
            className="search__close--btn btn btn-danger "
            onClick={closeSearchBox}>
            X
          </button>
        </div>
        <div className="search__container">
          <div className="search__container__box">
            <input
              type="text"
              className="form-control search__container__box--input"
              placeholder="Enter search term"
              onChange={onSearch}
            />
            {searchResults && (
              <div className="search-card">
                <ul>
                  {searchResults.map((post, i) => (
                    <li key={i}>
                      <p className="underline-effect">
                        <Link
                          className=""
                          to={`/posts/${post._id}`}
                          onClick={() => closeSearchBox()}>
                          {post.title}
                        </Link>
                      </p>
                      <h6>Author : {post.author.userName}</h6>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
