import "./registration.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../../components/ui/buttons/Button";
import FormGroup from "../../../components/ui/forms/FormGroup";
import FormLabel from "../../../components/ui/forms/FormLabel";
import FormInput from "../../../components/ui/forms/FormInput";
import Form from "../../../components/ui/forms/Form";
import AppTitle from "../../../components/Common/AppTitle";
import Loader from "../../../components/Loader/Loader";

import { regitation } from "../../../services/authServices";
import { authRegisterAction } from "../../../store/slices/authSlice";
import { getErrorMessage } from "../../../utils/Error";
import storage from "../../../utils/Storage";
import { log } from "../../../utils/Log";
import { decodeJwt } from "../../../utils/jwt";
import toastService from "../../../utils/Toast";

function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { loading } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profileImage", data.profileImage[0]);
    let { payload, error } = await regitation(formData);

    if (payload) {
      log("Registration", "info", payload);
      const decoded = decodeJwt(payload.token);
      storage.set("token", payload.token);
      storage.set("dc_user", decoded);
      dispatch(
        authRegisterAction({
          token: payload.token,
          user: decoded,
        })
      );
      toastService.success("Registration Success!");
      navigate("/home");
    }
    if (error) {
      toastService.error("Registration Faild!");
      log("Registration", "error", error);
    }
  };

  return (
    <>
      <AppTitle title="Welcome! - DEVCRAFT 💖" />

      {loading ? (
        <Loader />
      ) : (
        <section className="signup">
          <Form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="signup__title">Join the DEVCRAFT Community 🔥</h2>
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
                errorMessage={getErrorMessage({
                  errors: errors,
                  name: "username",
                  errorTypes: ["required", "maxLength"],
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
                errorMessage={getErrorMessage({
                  errors: errors,
                  name: "email",
                  errorTypes: ["required"],
                  messages: {
                    required: "Email is required",
                  },
                })}
              />
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
                errorMessage={getErrorMessage({
                  errors: errors,
                  name: "password",
                  errorTypes: ["required", "minLength"],
                  messages: {
                    required: "Password is required",
                    minLength: "Length cannot less than 8",
                  },
                })}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel
                text="Profile Image"
                className="signup__label"
                htmlFor="profileImage"
              />

              <FormInput
                type="file"
                className="signup__input"
                id="profileImage"
                name="profileImage"
                register={register}
              />
            </FormGroup>
            <Button type="submit" text="SIGNUP" className="signup__button" />
            <p className="underline-effect text-center my-2">
              <Link to="/login" className=" signup__link">
                Already Have An Account?
              </Link>
            </p>
          </Form>
        </section>
      )}
    </>
  );
}

export default Registration;
