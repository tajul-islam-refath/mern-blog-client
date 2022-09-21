import React from "react";
import NavTitle from "../NavTitle/NavTitle";
import Tag from "../Tag/Tag";

const TagCloud = () => {
  return (
    <section>
      <NavTitle text="Tag Cloud" />
      <div className="row">
        <div className="col-md-4">
          <Tag text="Health" />
        </div>
        <div className="col-md-4">
          <Tag text="Lifestyle" />
        </div>
        <div className="col-md-4">
          <Tag text="Programming" />
        </div>
        <div className="col-md-4">
          <Tag text="Travle" />
        </div>
        <div className="col-md-4">
          <Tag text="Education" />
        </div>
        <div className="col-md-4">
          <Tag text="Others" />
        </div>
      </div>
    </section>
  );
};

export default TagCloud;
