import React from "react";

// Badge component
const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
