import "./forgetpasswrod.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import FormGroup from "../../../components/ui/forms/FormGroup";
import FormLabel from "../../../components/ui/forms/FormLabel";
import FormInput from "../../../components/ui/forms/FormInput";
import Form from "../../../components/ui/forms/Form";
import Button from "../../../components/ui/buttons/Button";
import AppTitle from "../../../components/Common/AppTitle";
import OTPForm from "../../../components/OTPForm/OTPForm";

import { getErrorMessage } from "../../../utils/Error";
import toastService from "../../../utils/Toast";
import storage from "../../../utils/Storage";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const onSubmit = (otp) => {
    console.log(otp);
    setStep(3);
  };

  const onEmailSubmit = (data) => {
    console.log(data);
    setStep(2);
  };

  const onFinalSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="forget-password">
        <div className="forget-password__card">
          {step == 1 && (
            <>
              <h1>Verify Your Email</h1>
              <Form onSubmit={handleSubmit(onEmailSubmit)}>
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
                    validation={{ required: true, email: true }}
                    errorMessage={getErrorMessage({
                      errors: errors,
                      name: "email",
                      errorTypes: ["required", "email"],
                      messages: {
                        required: "Email is required",
                        email: "Valid email is required",
                      },
                    })}
                  />
                </FormGroup>
                <Button type="submit" text="Send" className="d-block w-100" />
              </Form>
            </>
          )}
          {step == 2 && <OTPForm length={6} onSubmit={onSubmit} />}
          {step == 3 && (
            <>
              <h1>Reset Your Password</h1>
              <Form onSubmit={handleSubmit(onFinalSubmit)}>
                <FormGroup>
                  <FormLabel
                    text="Password"
                    className="signup__label"
                    htmlFor="password"
                  />

                  <FormInput
                    type="password"
                    className="signup__input"
                    id="password"
                    name="password"
                    placeholder="*******"
                    register={register}
                    validation={{ required: true, minLength: 8 }}
                    errorMessage={getErrorMessage({
                      errors: errors,
                      name: "password",
                      errorTypes: ["required", "minLength"],
                      messages: {
                        required: "Password is required",
                        minLength: "Minimum 8 length required",
                      },
                    })}
                  />
                </FormGroup>
                <Button type="submit" text="Submit" className="d-block w-100" />
              </Form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
