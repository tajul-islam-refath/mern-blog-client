import "./Loader.scss";
import loading from "../../assets/img/loading.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Loader;
