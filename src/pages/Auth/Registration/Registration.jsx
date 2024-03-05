import "./registration.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { authSendOtp, authRegitation } from "../../../services/authServices";
import { authStateResetAction } from "../../../store/slices/authSlice";
import AppTitle from "../../../components/Common/AppTitle";
import Loader from "../../../components/Loader/Loader";

import {
  emailValiadtion,
  registationFormValidator,
} from "../../../Validation/regisTationForm";

function Registration() {
  const { isLoading, isError, isRegisterd, otpInfo, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    let { isValidationError, error } = registationFormValidator({
      userName,
      password,
      otp,
    });

    if (isValidationError) {
      setFormErrors(error);
    } else {
      let otpInfo = JSON.parse(window.localStorage.getItem("MS_otp"));
      dispatch(
        authRegitation({
          userName,
          password,
          otp,
          hash: otpInfo.hash,
          email: otpInfo.email,
        })
      );
    }
  };

  useEffect(() => {
    if (message) {
      toast(message);
    }

    if (otpInfo) {
      setNext(true);
    }

    if (isRegisterd) {
      setUserName("");
      setPassword("");
      setOtp("");

      window.localStorage.removeItem("MS_otp");
      navigate("/login");
    }

    dispatch(authStateResetAction());
  }, [message, dispatch, otpInfo, isRegisterd]);

  return (
    <>
      <AppTitle title="Welcome! - DEVCRAFT 💖" />
      {isLoading ? (
        <Loader />
      ) : (
        <section className="signup">
          <h2 className="signup__title">Join the DEVCRAFT Community 🔥</h2>
          <form className="signup__form" onSubmit={handleSubmit}>
            {next ? (
              <>
                <div className="form-group">
                  <label className="signup__label" htmlFor="userName">
                    User Name
                  </label>
                  <input
                    type="text"
                    placeholder="user name"
                    name="userName"
                    className={`form-control signup__input ${
                      formErrors.userName ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                  {formErrors.userName && (
                    <div
                      id="validationServerEmail"
                      className="invalid-feedback">
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
                    placeholder="OTP"
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp}
                    className={`form-control signup__input ${
                      formErrors.otp ? "is-invalid" : ""
                    }`}
                  />
                  {formErrors.otp && (
                    <div
                      id="validationServerEmail"
                      className="invalid-feedback">
                      {formErrors.otp}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label className="signup__label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    className={`form-control signup__input ${
                      formErrors.password ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  {formErrors.password && (
                    <div
                      id="validationServerEmail"
                      className="invalid-feedback">
                      {formErrors.password}
                    </div>
                  )}
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
                      formErrors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={onChangeEmail}
                    onFocus={emailOnFocus}
                  />
                  {formErrors.email && (
                    <div
                      id="validationServerEmail"
                      className="invalid-feedback">
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
      )}
    </>
  );
}

export default Registration;
