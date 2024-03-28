import { useState } from "react";
import OTPForm from "../../../components/OTPForm/OTPForm";
import "./forgetpasswrod.scss";

const ForgetPassword = () => {
  const [showOtp, setShowOtp] = useState(false);
  const onSubmit = (otp) => {
    console.log(otp);
  };
  return (
    <div className="forget-password">
      <div className="forget-password__card">
        <OTPForm length={6} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default ForgetPassword;
