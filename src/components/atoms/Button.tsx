"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClickButton?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClickButton,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-in-out";
  const variantStyles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400 }}
      onClick={onClickButton}
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </motion.button>
  );
};
