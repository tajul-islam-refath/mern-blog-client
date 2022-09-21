import React from "react";
import RecentPost from "../RecentPost/RecentPost";
import TagCloud from "../TagCloud/TagCloud";

function RightNav() {
  return (
    <section>
      <RecentPost />
      <TagCloud />
    </section>
  );
}

export default RightNav;
