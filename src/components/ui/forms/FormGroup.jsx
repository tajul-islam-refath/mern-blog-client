import React from "react";

const FormGroup = ({ children, classname, ...props }) => {
  return (
    <div className={`form-group ${classname}`} {...props}>
      {children}
    </div>
  );
};

export default FormGroup;
