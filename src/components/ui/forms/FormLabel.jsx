import React from "react";

const FormLabel = ({ classname, text, ...props }) => {
  return (
    <label className={`label ${classname}`} {...props}>
      {text}
    </label>
  );
};

export default FormLabel;
