import "./registration.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { authSendOtp } from "../../../services/authServices";
import { authStateResetAction } from "../../../store/slices/authSlice";
import AppTitle from "../../../components/Common/AppTitle";

import {
  emailValiadtion,
  registationFormValidator,
} from "../../../Validation/regisTationForm";

function Registration() {
  const { isLoading, isError, otpInfo, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const [next, setNext] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const sendOtp = (e) => {
    e.preventDefault();
    let error = {};
    if (!emailValiadtion(email)) {
      error.email = "Please provide a valid email";
      setFormErrors({ ...formErrors, ...error });
    } else {
      dispatch(authSendOtp({ email }));
    }
  };

  // onFocus email validation check
  const emailOnFocus = (event) => {
    let error = {};
    const value = event.target.value;
    if (!emailValiadtion(value)) {
      error.email = "Please provide a valid email";
      setFormErrors({ ...formErrors, ...error });
    }
    setEmail(value);
  };

  const onChangeEmail = (event) => {
    let error = {};
    const value = event.target.value;
    if (!emailValiadtion(value)) {
      error.email = "Please provide a valid email";
      setFormErrors({ ...formErrors, ...error });
    } else {
      error.email = "";
      setFormErrors({ ...formErrors, ...error });
    }
    setEmail(value);
  };

  const onFocus = (event) => {
    console.log(registationFormValidator(event, setFormErrors, formErrors));
    if (registationFormValidator(event, setFormErrors, formErrors)) {
      setFormErrors({});
    }
  };

  const onChange = (event) => {
    let error = {};
    if ((event.target.name = "userName")) {
      setUserName(event.target.value);
    } else if ((event.target.name = "otp")) {
      setOtp(event.target.value);
    } else if ((event.target.name = "password")) {
      setPassword(event.target.value);
    }
  };

  useEffect(() => {
    if (message) {
      toast(message);
    }

    if (otpInfo) {
      setNext(true);
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
                  className={`form-control signup__input ${
                    formErrors.userName ? " is-invalid" : ""
                  }`}
                  placeholder="user name"
                  name="userName"
                  value={userName}
                  onChange={onChange}
                  onFocus={onFocus}
                />
                {formErrors.userName && (
                  <div id="validationServerEmail" className="invalid-feedback">
                    {formErrors.userName}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label className="signup__label" htmlFor="otp">
                  OTP
                </label>
                <input
                  type="text"
                  className="form-control signup__input"
                  placeholder="OTP"
                  name="otp"
                  value={otp}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label className="signup__label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control signup__input"
                  name="password"
                  value={password}
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
                  className={`form-control signup__input ${
                    formErrors.email ? " is-invalid" : ""
                  }`}
                  id="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={onChangeEmail}
                  onFocus={emailOnFocus}
                />
                {formErrors.email && (
                  <div id="validationServerEmail" className="invalid-feedback">
                    {formErrors.email}
                  </div>
                )}
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
