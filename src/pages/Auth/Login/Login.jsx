import "./login.scss";
import { Link } from "react-router-dom";

import AppTitle from "../../../components/Common/AppTitle";

const Login = () => {
  return (
    <>
      <AppTitle title="Login to mindshare account" />
      <div className="login">
        <h2 className="login__title">Login Your Mind</h2>
        <form className="login__form">
          <div className="form-group">
            <label className="login__label" for="email">
              Email address
            </label>
            <input
              type="email"
              className="form-control login__input"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="form-group">
            <label className="login__label" for="password">
              Password
            </label>
            <input
              type="password"
              className="form-control login__input"
              placeholder="********"
            />
          </div>

          <p className="underline-effect">
            <Link to="/sign-up" className=" login__link">
              Don't Have An Account?
            </Link>
          </p>

          <button
            type="submit"
            data-title="Login"
            className="login__btn hover-effect">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
