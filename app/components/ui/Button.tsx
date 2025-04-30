import React from "react";
const Button: React.FC<{
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "px-6 py-2 rounded-md font-medium transition duration-150 ease-in-out";
  let variantStyle = "";

  switch (variant) {
    case "primary": // Example: Contact Us button
      variantStyle = "bg-stone-950 text-white hover:bg-stone-700";
      break;
    case "secondary": // Example: Show All Projects button
      variantStyle = "bg-gray-700 text-white hover:bg-gray-600";
      break;
    case "outline": // Example if needed
      variantStyle =
        "border border-black hover:bg-white text-black hover:text-gray-900";
      break;
    default:
      variantStyle = "bg-gray-500 text-white hover:bg-gray-600";
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
