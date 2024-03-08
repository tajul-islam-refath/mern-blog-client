const FormInput = ({
  type,
  className,
  placeholder,
  name,
  register,
  validation,
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
        {...register(name, { ...validation })}
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
