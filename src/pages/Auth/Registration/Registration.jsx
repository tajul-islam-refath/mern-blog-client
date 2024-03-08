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

import Button from "../../../components/ui/buttons/Button";
import FormGroup from "../../../components/ui/forms/FormGroup";
import FormLabel from "../../../components/ui/forms/FormLabel";
import FormInput from "../../../components/ui/forms/FormInput";
import Form from "../../../components/ui/forms/Form";

function Registration() {
  const { isLoading, isError, isRegisterd, otpInfo, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

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

    console.log(error);

    if (isValidationError) {
      setFormErrors(error);
    }
  };

  return (
    <>
      <AppTitle title="Welcome! - DEVCRAFT 💖" />
      {isLoading ? (
        <Loader />
      ) : (
        <section className="signup">
          <h2 className="signup__title">Join the DEVCRAFT Community 🔥</h2>
          <Form className="signup__form" onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel
                text="Username"
                classname="signup__label"
                htmlFor="username"
              />
              <FormInput
                type="text"
                placeholder="username"
                name="userName"
                className="signup__input"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                isError={formErrors.userName ? true : false}
                errorMessage={formErrors.userName && formErrors.userName}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel
                text="Email"
                className="signup__label"
                htmlFor="email"
              />

              <FormInput
                type="email"
                className="signup__input"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={onChangeEmail}
                onFocus={emailOnFocus}
                isError={formErrors.email ? true : false}
                errorMessage={formErrors.email && formErrors.email}
              />

              {/* <input
                type="email"
                className={`form-control signup__input ${
                  formErrors.email ? "is-invalid" : ""
                }`}
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={onChangeEmail}
                onFocus={emailOnFocus}
              /> */}
            </FormGroup>
            <FormGroup>
              <FormLabel
                text="Password"
                className="signup__label"
                htmlFor="Password"
              />

              <FormInput
                type="password"
                className="signup__input"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                isError={formErrors.password ? true : false}
                errorMessage={formErrors.password && formErrors.password}
              />
            </FormGroup>

            <p className="underline-effect">
              <Link to="/login" className=" signup__link">
                Already Have An Account?
              </Link>
            </p>

            <Button type="submit" text="SIGNUP" className="signup-button" />
          </Form>
        </section>
      )}
    </>
  );
}

export default Registration;
