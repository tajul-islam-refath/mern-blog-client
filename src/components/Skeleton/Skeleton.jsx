import "./skeleton.scss";

const Skeleton = ({ className, styles }) => {
  return (
    <div
      className={`${className} skeleton is-loading`}
      style={{ ...styles }}></div>
  );
};

export default Skeleton;
