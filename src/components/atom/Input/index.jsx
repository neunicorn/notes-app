import React from "react";

const Input = ({ placeholder, ...rest }) => {
  return <input placeholder={placeholder} {...rest} />; // rest is the rest of the props
};

export default Input;
