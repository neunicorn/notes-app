import React from "react";

const TextArea = ({ placeholder, ...rest }) => {
  return <textarea placeholder={placeholder} {...rest} />;
};

export default TextArea;
