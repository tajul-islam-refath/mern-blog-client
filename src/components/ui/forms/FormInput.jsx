import "./Form.scss";
const FormInput = ({
  type,
  className,
  placeholder,
  name,
  register,
  validation = {},

  errorMessage = null,
  ...props
}) => {
  return (
    <>
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
      {errorMessage && (
        <div id={`validation-${name}`} className="invalid-feedback">
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default FormInput;
