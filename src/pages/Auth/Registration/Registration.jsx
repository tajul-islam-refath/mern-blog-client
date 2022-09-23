import "./registration.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import AppTitle from "../../../components/Common/AppTitle";

function Registration() {
  const [next, setNext] = useState(false);

  const sendOtp = (e) => {
    e.preventDefault();
    setNext(true);
  };
  return (
    <>
      <AppTitle title="Registration for a new account" />
      <section className="signup">
        <h2 className="signup__title">Share Your Knowledge</h2>
        <form className="login__form">
          {next ? (
            <>
              <div className="form-group">
                <label className="login__label" for="otp">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control login__input"
                  placeholder="OTP"
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
            </>
          ) : (
            <>
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
            </>
          )}

          <p className="underline-effect">
            <Link to="/login" className=" login__link">
              Already Have An Account?
            </Link>
          </p>

          {next ? (
            <button
              type="submit"
              data-title="Login"
              className="login__btn hover-effect">
              Registration
            </button>
          ) : (
            <button
              type="button"
              data-title="Login"
              className="login__btn hover-effect"
              onClick={sendOtp}>
              Send
            </button>
          )}
        </form>
      </section>
    </>
  );
}

export default Registration;
