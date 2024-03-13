import "./Form.scss";

const FormLabel = ({ classname, text, ...props }) => {
  return (
    <label className={` ${classname} form-label`} {...props}>
      {text}
    </label>
  );
};

export default FormLabel;
