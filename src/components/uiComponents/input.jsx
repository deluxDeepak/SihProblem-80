import React from "react";

const Input = ({ type = "text", placeholder = "Enter text", value, onChange, className = "" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/90 ${className}`}
    />
  );
};

export default Input;
