import React from "react";

const FormInput = ({
  type,
  className,
  placeholder,
  name,
  value,
  isError,
  errorMessage,
  ...props
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`${className} form-control  ${isError ? "is-invalid" : ""}`}
        value={value}
        {...props}
      />
      {isError && (
        <div id={`validation-${name}`} className="invalid-feedback">
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default FormInput;
