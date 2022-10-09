export const emailValiadtion = (email) => {
  let regex =
    /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

  return regex.test(email);
};

export const registationFormValidator = (form) => {
  let error = {};
  if (!form.userName) {
    error.userName = "User name is required";
  } else if (!form.otp) {
    error.otp = "OTP is required";
  } else if (!form.password) {
    error.password = "Password is required";
  } else if (form.password.length < 8) {
    error.password = "Password length must be at least 8 characters";
  }

  const isValidationError = Object.keys(error).length != 0 ? true : false;
  return {
    isValidationError,
    error,
  };
};

export const loginFormValidator = (form) => {
  let error = {};
  if (!form.email) {
    error.email = "Email is required";
  } else if (!form.password) {
    error.password = "Password is required";
  } else if (form.password.length < 8) {
    error.password = "Password must be at least 8 characters";
  }

  const isValidationError = Object.keys(error).length != 0 ? true : false;
  return {
    isValidationError,
    error,
  };
};
