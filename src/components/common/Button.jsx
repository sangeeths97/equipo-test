import React from "react";

const Button = ({ type, children, className }) => {
  return (
    <button type={type} className={` rounded-3xl h-10 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
