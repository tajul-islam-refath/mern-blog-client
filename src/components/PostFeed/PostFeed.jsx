import PostCard from "../PostCard/PostCard";

const PostFeed = ({ posts }) => {
  return (
    <>
      {posts.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </>
  );
};

export default PostFeed;
