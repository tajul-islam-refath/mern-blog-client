import "./login.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import AppTitle from "../../../components/Common/AppTitle";
import Loader from "../../../components/Loader/Loader";
import Button from "../../../components/ui/buttons/Button";
import FormGroup from "../../../components/ui/forms/FormGroup";
import FormLabel from "../../../components/ui/forms/FormLabel";
import FormInput from "../../../components/ui/forms/FormInput";
import Form from "../../../components/ui/forms/Form";

import { login } from "../../../services/authServices";
import { authLoginAction } from "../../../store/slices/authSlice";
import { getErrorMessage } from "../../../utils/Error";
import storage from "../../../utils/Storage";
import { log } from "../../../utils/Log";
import { decodeJwt } from "../../../utils/jwt";
import toastService from "../../../utils/Toast";

const Login = () => {
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
    let { payload, error } = await login(data);

    if (payload) {
      log("Login", "info", payload);
      const decoded = decodeJwt(payload.token);
      storage.set("token", payload.token);
      storage.set("dc_user", decoded);
      dispatch(
        authLoginAction({
          token: payload.token,
          user: decoded,
        })
      );
      toastService.success("Login Success!");
      navigate("/home");
    }
    if (error) {
      toastService.error("Login Faild!");
      log("Login", "error", error);
    }
  };

  return (
    <>
      <AppTitle title="Welcome! - DEVCRAFT 💖" />
      {loading ? (
        <Loader />
      ) : (
        <div className="login">
          <Form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="login__title">Join the DEVCRAFT Community 🔥</h2>
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

            <Button
              type="submit"
              text="Login"
              className="login__btn hover-effect"
            />
            <p className="underline-effect text-center my-2">
              <Link to="/sign-up" className=" login__link">
                New to DEVCRAFT Community? Create account.
              </Link>
            </p>
          </Form>
        </div>
      )}
    </>
  );
};

export default Login;
