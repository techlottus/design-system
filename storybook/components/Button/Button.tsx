import cn from "classnames";
import { ButtonSize, ButtonType, ButtonVariant } from "../Types/Button.types";
import React from "react";
const sizes: ButtonSize = {
  xsm: cn("px-4 py-3 text-sm rounded"),
  sm: cn("py-4 px-8 text-base rounded-lg"),
  md: cn("py-5 px-9 text-xl rounded-lg"),
  lg: cn("py-6 px-12 text-xl rounded-lg"),
};

const variants: ButtonVariant = {
  solid: {
    primary: cn(
      "bg-primary-500 text-surface-100 border-2 border-primary-500 ",
      "hover:bg-primary-600 hover:border-primary-600",
      "active:bg-primary-700 active:border-primary-700 active:ring-0 ",
      "focus:bg-primary-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
    ),
    secondary: cn(
      "bg-secondary-500 text-surface-100 border-2 border-secondary-500 ",
      "hover:bg-secondary-600 hover:border-secondary-600",
      "active:bg-secondary-700 active:border-secondary-700 active:ring-0 ",
      "focus:bg-secondary-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
    ),
    surface: cn(
      "bg-surface-500 text-surface-100 border-2 border-surface-500 ",
      "hover:bg-surface-600 hover:border-surface-600",
      "active:bg-surface-700 active:border-surface-700 active:ring-0 ",
      "focus:bg-surface-700 focus:border-surface-500 focus:ring-2 focus:ring-surface-50 focus:outline-none"
    ),
    info: cn(
      "bg-info-500 text-surface-100 border-2 border-info-500 ",
      "hover:bg-info-600 hover:border-info-600",
      "active:bg-info-700 active:border-info-700 active:ring-0 ",
      "focus:bg-info-700 focus:border-info-500 focus:ring-2 focus:ring-info-50 focus:outline-none"
    ),
    warning: cn(
      "bg-warning-500 text-surface-100 border-2 border-warning-500 ",
      "hover:bg-warning-600 hover:border-warning-600",
      "active:bg-warning-700 active:border-warning-700 active:ring-0 ",
      "focus:bg-warning-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-50 focus:outline-none"
    ),
    error: cn(
      "bg-error-500 text-surface-100 border-2 border-error-500 ",
      "hover:bg-error-600 hover:border-error-600",
      "active:bg-error-700 active:border-error-700 active:ring-0 ",
      "focus:bg-error-700 focus:border-error-500 focus:ring-2 focus:ring-error-50 focus:outline-none"
    ),
    success: cn(
      "bg-success-500 text-surface-100 border-2 border-success-500 ",
      "hover:bg-success-600 hover:border-success-600",
      "active:bg-success-700 active:border-success-700 active:ring-0 ",
      "focus:bg-success-700 focus:border-success-500 focus:ring-2 focus:ring-success-50 focus:outline-none"
    )
  },
  outlined: {
    primary: cn(
      "bg-transparent text-primary-500 border-2 border-primary-500  ",
      "hover:bg-primary-100 hover:opacity-50 ",
      "active:bg-primary-100 ",
      "focus:bg-primary-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
    ),
    secondary: cn(
      "bg-transparent text-secondary-500 border-2 border-secondary-500  ",
      "hover:bg-secondary-100 hover:opacity-50 ",
      "active:bg-secondary-100 ",
      "focus:bg-secondary-100 focus:border-secondary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
    ),
    surface: cn(
      "bg-transparent text-surface-500 border-2 border-surface-500  ",
      "hover:bg-surface-100 hover:opacity-50 ",
      "active:bg-surface-100 ",
      "focus:bg-surface-100 focus:border-surface-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
    ),
    info: cn(
      "bg-transparent text-info-500 border-2 border-info-500  ",
      "hover:bg-info-100 hover:opacity-50 ",
      "active:bg-info-100 ",
      "focus:bg-info-100 focus:border-info-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
    ),
    warning: cn(
      "bg-transparent text-warning-500 border-2 border-warning-500  ",
      "hover:bg-warning-100 hover:opacity-50 ",
      "active:bg-warning-100 ",
      "focus:bg-warning-100 focus:border-warning-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
    ),
    error: cn(
      "bg-transparent text-error-500 border-2 border-error-500  ",
      "hover:bg-error-100 hover:opacity-50 ",
      "active:bg-error-100 ",
      "focus:bg-error-100 focus:border-error-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
    ),
    success: cn(
      "bg-transparent text-success-500 border-2 border-success-500  ",
      "hover:bg-success-100 hover:opacity-50 ",
      "active:bg-success-100 ",
      "focus:bg-success-100 focus:border-success-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
    )
  },
  transparent: cn(
    "bg-transparent text-surface-900 ",
    "hover:text-surface-800 hover:bg-surface-100",
    "active:bg-surface-200 active:ring-0 active:border-0 active:text-surface-900 ",
    "focus:border-2 focus:border-surface-900 focus:ring-2 focus-ring-primary-50"
  ),
  custom: ""
};

const commonClasses: string = cn(
  "flex",
  "relative",
  "min-w-40 max-w-full",
  "font-bold font-headings",
  "items-center justify-center"
);

const disabledVariants: ButtonVariant = {
  solid: cn("cursor-not-allowed", "bg-surface-200", "text-surface-400"),
  transparent: cn("cursor-not-allowed text-surface-400"),
  outlined: cn(
    "cursor-not-allowed",
    "bg-transparent",
    "text-surface-400",
    "border-2 border-surface-400"
  ),
  custom: "" 
};

const Button: React.FC<ButtonType> = (props: ButtonType) => {
  const {
    className = "",
    disabled = false,
    size = "md",
    variant = "solid",
    color,
    children,
    onClick,
  } = props;

  const buttonClasses: string = cn(commonClasses, className, [sizes[size]], {
    [variants[variant][color]]: !disabled && variant === "solid" || variant === "outlined",
    [variants[variant]]: !disabled && variant === "transparent",
    [disabledVariants[variant]]: disabled,
    ["cursor-pointer"]: !disabled,
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
