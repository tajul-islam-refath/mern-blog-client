import "./registration.scss";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { authSendOtp, authRegitation } from "../../../services/authServices";
import { authStateResetAction } from "../../../store/slices/authSlice";
import AppTitle from "../../../components/Common/AppTitle";
import Loader from "../../../components/Loader/Loader";

import Button from "../../../components/ui/buttons/Button";
import FormGroup from "../../../components/ui/forms/FormGroup";
import FormLabel from "../../../components/ui/forms/FormLabel";
import FormInput from "../../../components/ui/forms/FormInput";
import Form from "../../../components/ui/forms/Form";

function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const onSubmit = (data) => {};
  console.log(errors);

  const getErrorMessage = ({ name, options = [], messages }) => {
    if (errors[name]?.type && options.includes(errors[name]?.type)) {
      return messages[errors[name]?.type];
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
          <Form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <FormLabel
                text="Username"
                classname="signup__label"
                htmlFor="username"
              />
              <FormInput
                type="text"
                placeholder="username"
                name="username"
                className="signup__input"
                register={register}
                validation={{ required: true, maxLength: 10 }}
                isError={errors.username ? true : false}
                errorMessage={getErrorMessage({
                  name: "username",
                  options: ["required", "maxLength"],
                  messages: {
                    required: "Username is required",
                    maxLength: "Length cannot be greater then 10",
                  },
                })}
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
                name="email"
                placeholder="example@gmail.com"
                register={register}
                validation={{ required: true }}
                isError={errors.email ? true : false}
                errorMessage={getErrorMessage({
                  name: "email",
                  options: ["required"],
                  messages: {
                    required: "Email is required",
                  },
                })}
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
                name="password"
                placeholder="********"
                register={register}
                validation={{ required: true, minLength: 8 }}
                isError={errors.password ? true : false}
                errorMessage={getErrorMessage({
                  name: "password",
                  options: ["required", "minLength"],
                  messages: {
                    required: "Password is required",
                    minLength: "Length cannot less than 8",
                  },
                })}
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
