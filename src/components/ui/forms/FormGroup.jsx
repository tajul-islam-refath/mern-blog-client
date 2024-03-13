import "./Form.scss";

const FormGroup = ({ children, classname, ...props }) => {
  return (
    <div className={`form-group ${classname}`} {...props}>
      {children}
    </div>
  );
};

export default FormGroup;
