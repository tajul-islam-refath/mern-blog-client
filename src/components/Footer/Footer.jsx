import "./footer.scss";

import NavTitle from "../NavTitle/NavTitle";
import RecentPostItem from "../RecentPostItem/RecentPostItem";
import TagCloud from "../TagCloud/TagCloud";

import { items } from "../../data/PostListItem";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <NavTitle text="Latest Articles" />
            {items.map((item, i) => (
              <RecentPostItem key={i} item={item} />
            ))}
          </div>
          <div className="col-md-4">
            <TagCloud />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div className="authorName">
        <p className="underline-effect">
          Developed By
          <a href="https://github.com/tajul-islam-refath">
            @Tajul Isalm Refath
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
