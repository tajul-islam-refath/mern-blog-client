import "./Form.scss";
const FormTextArea = ({
  type,
  className,
  placeholder,
  name,
  register,
  validation = {},
  errorMessage = null,
  cols = "30",
  rows = "10",
  ...props
}) => {
  return (
    <>
      <textarea
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

export default FormTextArea;
