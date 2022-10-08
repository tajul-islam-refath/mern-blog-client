export const emailValiadtion = (email) => {
  let regex =
    /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

  return regex.test(email);
};

export const registationFormValidator = (event, setFormErrors, formErrors) => {
  let error = {};
  if ((event.target.name = "userName")) {
    error.userName = "User name is required";
    setFormErrors({ ...formErrors, ...error });
  } else if ((event.target.name = "otp")) {
    error.otp = "OTP is required";
    setFormErrors({ ...formErrors, ...error });
  } else if ((event.target.name = "password")) {
    error.password = "Password is required";
    setFormErrors({ ...formErrors, ...error });
  }

  return Object.keys(formErrors).length === 0 ? true : false;
};
