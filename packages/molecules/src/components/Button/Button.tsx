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
  primary: cn(
    "bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 active:bg-primary-700",
    "text-surface-100",
    "border-2 border-primary-500  hover:border-primary-600 active:border-primary-700 active:ring-0 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
  ),
  outlined: cn(
    "bg-transparent hover:bg-surface-200 active:bg-surface-400 focus:bg-surface-100",
    "text-surface-900",
    " border border-surface-900 focus:border-surface-900 focus:ring-2 focus:ring-surface-900 focus:outline-none"
  ),
  text: cn(
    "bg-transparent hover:bg-surface-200 active:bg-surface-400 ",
    "text-surface-900 hover:text-surface-900",
    "active:ring-0 active:border-0 focus:border focus:border-surface-900 focus:ring-1 focus:ring-surface-900 "
  ),
  "outlined-negative": cn(
    "bg-transparent text-surface-100 border border-surface-100  ",
    "hover:bg-surface-100 hover:border-surface-900 hover:text-surface-900",
    "active:ring-0 active:border-0 active:bg-surface-400 active:text-surface-100 ",
    "focus:border focus:border-surface-100 focus:ring-1 focus:ring-surface-100 "
  ),
};

const commonClasses: string = cn(
  "flex",
  "relative",
  "min-w-40 max-w-full",
  "font-bold font-headings",
  "items-center justify-center"
);

const disabledVariants: ButtonVariant = {
  primary: cn("cursor-not-allowed", "bg-surface-200", "text-surface-400"),
  text: cn("cursor-not-allowed text-surface-400"),
  outlined: cn(
    "cursor-not-allowed",
    "bg-transparent",
    "text-surface-400",
    "border border-surface-400"
  ),
  "outlined-negative": cn(
    "cursor-not-allowed",
    "bg-transparent",
    "text-surface-200",
    "border border-surface-200"
  ),
};

const Button: React.FC<ButtonType> = (props: ButtonType) => {
  const {
    className = "",
    disabled = false,
    size = "md",
    variant = "primary",
    children,
    onClick,
  } = props;

  const buttonClasses: string = cn(commonClasses, className, [sizes[size]], {
    [variants[variant]]: !disabled,
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
