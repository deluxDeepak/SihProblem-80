import React from "react";

// Variants with direct Tailwind colors
const variantClasses = {
  default:
    "bg-blue-600 text-white hover:bg-blue-700 border-transparent",
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 border-transparent",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 border-transparent",
  outline:
    "border border-gray-400 text-gray-800 bg-transparent hover:bg-gray-100",
  success:
    "bg-green-600 text-white hover:bg-green-700 border-transparent",
  warning:
    "bg-yellow-500 text-black hover:bg-yellow-600 border-transparent",
  approved:
    "bg-green-500 text-white border-transparent",
  pending:
    "bg-yellow-400 text-black border-transparent",
  draft:
    "bg-gray-300 text-gray-700 border-transparent",
};

function BadgeVariant({ className = "", variant = "default", ...props }) {
  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClass = variantClasses[variant] || variantClasses.default;

  return (
    <span
      className={`${baseClasses} ${variantClass} ${className}`}
      {...props}
    />
  );
}

export { BadgeVariant };
