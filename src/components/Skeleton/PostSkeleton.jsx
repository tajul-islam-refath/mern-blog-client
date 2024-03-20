import Skeleton from "./Skeleton";

const PostSkeleton = () => {
  return (
    <div
      className="card card-body my-4"
      style={{ width: "100%", margin: "auto", borderRadius: "16px" }}>
      <Skeleton
        styles={{
          width: "100%",
          height: "300px",
          margin: "auto",
        }}
      />
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Skeleton
          styles={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        />
        <Skeleton
          styles={{
            width: "100px",
            height: "20px",
            borderRadius: "16px",
          }}
        />
      </div>
      <Skeleton
        styles={{
          width: "100%",
          height: "20px",
          borderRadius: "16px",
          marginTop: "8px",
        }}
      />
    </div>
  );
};

export default PostSkeleton;
