import "./search.scss";

const Search = ({ searchOpen, setSearchOpen }) => {
  const closeSearchBox = () => {
    setSearchOpen(false);
  };

  console.log(searchOpen);
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
              type="email"
              className="form-control search__container__box--input"
              placeholder="Enter search query"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
