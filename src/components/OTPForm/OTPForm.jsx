import React, { useEffect, useRef, useState } from "react";
import "./otpform.scss";

function OTPForm({ length = 4, onSubmit }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    let value = e.target.value;
    if (isNaN(value)) return;

    let prevOtp = [...otp];
    prevOtp[index] = value.substring(value.length - 1); // take last value if user input multiple value
    setOtp(prevOtp);

    const combineOtp = prevOtp.join("");
    if (combineOtp.length === length) {
      onSubmit(combineOtp);
    }

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[prevOtp.indexOf("")].focus();
    }
  };

  /**
   * After click on any field move cursor left side to right side and if there any previous input is empty
   * cursor move there
   * @param {*} index int
   */
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // if previous input field is empty cursor will move to this field
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  /**
   * Remove current input value and move to previous one
   * @param {*} index int
   * @param {*} e Event
   */
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  return (
    <div className="otp-form">
      <h1>Enter Your {length} Digit OTP Here</h1>
      {otp.map((value, index) => (
        <input
          type="text"
          ref={(input) => (inputRefs.current[index] = input)}
          key={index}
          value={value}
          onChange={(e) => handleChange(index, e)}
          onClick={(e) => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="otp-input"
        />
      ))}
    </div>
  );
}

export default OTPForm;
