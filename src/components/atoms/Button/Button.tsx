"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClickButton?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClickButton,
  className = "",
}) => {
  const baseStyles =
    "rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 transition-colors";
  const variantStyles = {
    primary:
      "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
    secondary:
      "border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]",
  };

  return (
    <button
      onClick={onClickButton}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
