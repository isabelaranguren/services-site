import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-light";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyle = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  }[size];

  const variantStyle = {
    primary: "bg-red-700 text-white hover:bg-stone-700",
    secondary: "bg-stone-950 text-white hover:bg-gray-600",
    outline: "border border-black hover:bg-white text-black hover:text-gray-900",
    "outline-light": "border border-white hover:bg-white text-white hover:text-gray-900",
  }[variant] || "bg-gray-500 text-white hover:bg-gray-600";

  const classes = `${baseStyle} ${sizeStyle} ${variantStyle} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;