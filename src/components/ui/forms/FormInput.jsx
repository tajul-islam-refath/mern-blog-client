import "./Form.scss";
const FormInput = ({
  type,
  className,
  placeholder,
  name,
  register = null,
  validation = {},
  errorMessage = null,
  ...props
}) => {
  return (
    <>
      {register && (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className={`${className} form-input form-control  ${
            errorMessage ? "is-invalid" : ""
          }`}
          {...register(name, { ...validation })}
          {...props}
        />
      )}

      {!register && (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className={`${className} form-input form-control  ${
            errorMessage ? "is-invalid" : ""
          }`}
          {...props}
        />
      )}

      {errorMessage && (
        <div id={`validation-${name}`} className="invalid-feedback">
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default FormInput;
