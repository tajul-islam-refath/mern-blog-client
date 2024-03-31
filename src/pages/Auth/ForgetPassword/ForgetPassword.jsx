import "./forgetpasswrod.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppTitle from "../../../components/Common/AppTitle";
import OTPForm from "../../../components/OTPForm/OTPForm";
import VarifyEmail from "./VarifyEmail";

import toastService from "../../../utils/Toast";
import storage from "../../../utils/Storage";
import ResetPassword from "./ResetPassword";
import { resetPassword, sendOtpToEmail } from "../../../services/authServices";

const ForgetPassword = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: "",
    otp: "",
    hash: "",
  });

  const navigate = useNavigate();

  const onEmailSubmit = async ({ email }) => {
    let { payload, error } = await sendOtpToEmail({ email });

    if (payload) {
      setForm({
        ...form,
        ["email"]: email,
        ["hash"]: payload.hash,
      });
      setStep(2);
    }
    if (error) {
      toastService.error("Internal server error!");
    }
  };

  const reSendOtp = () => {
    onEmailSubmit(form.email);
  };

  const onOTPSubmit = (otp) => {
    setForm({
      ...form,
      ["otp"]: otp,
    });
    setStep(3);
  };

  const onFormSubmit = async ({ password }) => {
    let { payload, error } = await resetPassword({
      ...form,
      password,
    });

    if (payload) {
      toastService.success("Password reset success 🎉");
      setForm({
        email: "",
        otp: "",
        hash: "",
      });
      navigate("/login");
      setStep(1);
    }

    if (error) {
      toastService.error("Password reset faield");
    }
  };

  console.log(form);
  return (
    <>
      <div className="forget-password">
        <div className="forget-password__card">
          {step == 1 && <VarifyEmail onEmailSubmit={onEmailSubmit} />}
          {step == 2 && (
            <OTPForm length={6} onSubmit={onOTPSubmit} reSendOtp={reSendOtp} />
          )}
          {step == 3 && <ResetPassword onFormSubmit={onFormSubmit} />}
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
