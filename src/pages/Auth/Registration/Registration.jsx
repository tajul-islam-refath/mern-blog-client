import "./registration.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { authSendOtp } from "../../../services/authServices";
import { authStateResetAction } from "../../../store/slices/authSlice";
import AppTitle from "../../../components/Common/AppTitle";

function Registration() {
  const { isLoading, isError, otpInfo, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const [next, setNext] = useState(false);
  const [email, setEmail] = useState("");

  const sendOtp = (e) => {
    e.preventDefault();
    dispatch(authSendOtp({ email }));
    // setNext(true);
  };

  useEffect(() => {
    if (message) {
      toast(message);
    }

    dispatch(authStateResetAction());
  }, [message, dispatch]);

  return (
    <>
      <AppTitle title="MindShare-Registration" />
      <section className="signup">
        <h2 className="signup__title">Share Your Knowledge</h2>
        <form className="signup__form">
          {next ? (
            <>
              <div className="form-group">
                <label className="signup__label" htmlFor="userName">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control login__input"
                  placeholder="user name"
                />
              </div>
              <div className="form-group">
                <label className="signup__label" htmlFor="otp">
                  OTP
                </label>
                <input
                  type="text"
                  className="form-control login__input"
                  placeholder="OTP"
                />
              </div>
              <div className="form-group">
                <label className="signup__label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control signup__input"
                  placeholder="********"
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label className="signup__label" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control signup__input"
                  id="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </>
          )}

          <p className="underline-effect">
            <Link to="/login" className=" signup__link">
              Already Have An Account?
            </Link>
          </p>

          {next ? (
            <button
              type="submit"
              data-title="signup"
              className="signup__btn hover-effect">
              Registration
            </button>
          ) : (
            <button
              type="button"
              data-title="signup"
              className="signup__btn hover-effect"
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
