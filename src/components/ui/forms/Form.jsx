import React from "react";

const Form = ({ className, children, ...props }) => {
  return (
    <form className={className} {...props}>
      {children}
    </form>
  );
};

export default Form;
