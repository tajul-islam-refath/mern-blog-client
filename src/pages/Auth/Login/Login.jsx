import "./login.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { authLogin } from "../../../services/authServices";
import { authStateResetAction } from "../../../store/slices/authSlice";
import AppTitle from "../../../components/Common/AppTitle";
import Loader from "../../../components/Loader/Loader";

import {
  emailValiadtion,
  loginFormValidator,
} from "../../../Validation/regisTationForm";

const Login = () => {
  const { isLoading, isLogedIn, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

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
    let { isValidationError, error } = loginFormValidator({
      email,
      password,
    });

    if (isValidationError) {
      setFormErrors(error);
    } else {
      dispatch(
        authLogin({
          email,
          password,
        })
      );
    }
  };

  useEffect(() => {
    if (message) {
      toast(message);
    }

    if (isLogedIn) {
      setEmail("");
      setPassword("");

      navigate("/home");
    }

    dispatch(authStateResetAction());
  }, [message, dispatch, isLogedIn]);

  return (
    <>
      <AppTitle title="Welcome! - DEVCRAFT 💖" />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="login">
          <h2 className="login__title">Join the DEVCRAFT Community 🔥</h2>
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="login__label" for="email">
                Email address
              </label>
              <input
                type="email"
                className={`form-control login__input ${
                  formErrors.email ? "is-invalid" : ""
                }`}
                id="email"
                placeholder="example@gmail.com"
                onFocus={emailOnFocus}
                onChange={onChangeEmail}
              />
              {formErrors.email && (
                <div id="validationServerEmail" className="invalid-feedback">
                  {formErrors.email}
                </div>
              )}
            </div>
            <div className="form-group">
              <label className="login__label" for="password">
                Password
              </label>
              <input
                type="password"
                className={`form-control login__input ${
                  formErrors.password ? "is-invalid" : ""
                }`}
                placeholder="********"
                onChange={(event) => setPassword(event.target.value)}
              />
              {formErrors.password && (
                <div id="validationServerPassword" className="invalid-feedback">
                  {formErrors.password}
                </div>
              )}
            </div>

            <p className="underline-effect">
              <Link to="/sign-up" className=" login__link">
                New to DEVCRAFT Community? Create account.
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
      )}
    </>
  );
};

export default Login;
