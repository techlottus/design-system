import cn from "classnames";
import { ButtonSize, ButtonType, ButtonVariant } from "../Types/button.types";
import Icon from "../Icon/Icon";
import React from "react";
const sizes: ButtonSize = {
  xsm: cn("px-4 py-3 text-sm rounded"),
  sm: cn("py-4 px-8 text-base rounded-lg"),
  md: cn("py-5 px-9 text-xl rounded-lg"),
  lg: cn("py-6 px-12 text-xl rounded-lg"),
};

const variants: ButtonVariant = {
  primary: cn(
    "bg-surface-900 hover:bg-surface-800 focus:bg-surface-600 active:bg-surface-600",
    "text-surface-100",
    "border border-surface-900 active:border-0 active:ring-0 focus:border-surface-900 focus:ring-2 focus:ring-surface-900 focus:outline-none"
  ),
  outlined: cn(
    "bg-transparent hover:bg-surface-200 active:bg-surface-400 focus:bg-surface-100",
    "text-surface-900",
    " border border-transparent focus:border-surface-900 focus:ring-2 focus:ring-surface-900 focus:outline-none"
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
  primary: cn("cursor-not-allowed", "bg-surface-400", "text-surface-100"),
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
    label,
    iconName,
    disabled = false,
    size = "md",
    variant = "primary",
    onClick,
  } = props;

  const buttonClasses: string = cn(commonClasses, className, [sizes[size]], {
    [variants[variant]]: !disabled,
    [disabledVariants[variant]]: disabled,
    ["cursor-pointer"]: !disabled,
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {iconName ? (
        <span className={cn(" flex items-center", { ["space-x-2"]: label })}>
          <Icon iconName={iconName} /> <span>{label}</span>
        </span>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default Button;
