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

// export default Button;
// import cn from "classnames";
// import { ButtonSize, ButtonType, ButtonVariant } from "../Types/Button.types";
// import React from "react";
// const sizes: ButtonSize = {
//   xsm: cn("px-4 py-3 text-sm rounded"),
//   sm: cn("py-4 px-8 text-base rounded-lg"),
//   md: cn("py-5 px-9 text-xl rounded-lg"),
//   lg: cn("py-6 px-12 text-xl rounded-lg"),
// };

// const variants: ButtonVariant = {
//   solid: {
//     primary: {
//       "100": cn(
//         "bg-primary-100 text-primary-900 border-2 border-primary-100 ",
//         "hover:bg-primary-200 hover:border-primary-200",
//         "active:bg-primary-300 active:border-primary-300 active:ring-0 ",
//         "focus:bg-primary-300 focus:border-primary-200 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       "200": cn(
//         "bg-primary-200 text-surface-800 border-2 border-primary-200 ",
//         "hover:bg-primary-300 hover:border-primary-300",
//         "active:bg-primary-400 active:border-primary-400 active:ring-0 ",
//         "focus:bg-primary-400 focus:border-primary-300 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       "300": cn(
//         "bg-primary-300 text-surface-700 border-2 border-primary-300 ",
//         "hover:bg-primary-400 hover:border-primary-400",
//         "active:bg-primary-500 active:border-primary-500 active:ring-0 ",
//         "focus:bg-primary-500 focus:border-primary-400 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       "400": cn(
//         "bg-primary-400 text-surface-600 border-2 border-primary-400 ",
//         "hover:bg-primary-500 hover:border-primary-500",
//         "active:bg-primary-600 active:border-primary-600 active:ring-0 ",
//         "focus:bg-primary-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       "500": cn(
//         "bg-primary-500 text-surface-100 border-2 border-primary-500 ",
//         "hover:bg-primary-600 hover:border-primary-600",
//         "active:bg-primary-700 active:border-primary-700 active:ring-0 ",
//         "focus:bg-primary-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       "600": cn(
//         "bg-primary-500 text-surface-600 border-2 border-primary-500 ",
//         "hover:bg-primary-600 hover:border-primary-600",
//         "active:bg-primary-700 active:border-primary-700 active:ring-0 ",
//         "focus:bg-primary-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       "700": cn(
//         "bg-primary-500 text-surface-700 border-2 border-primary-500 ",
//         "hover:bg-primary-600 hover:border-primary-600",
//         "active:bg-primary-700 active:border-primary-700 active:ring-0 ",
//         "focus:bg-primary-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       "800": cn(
//         "bg-primary-500 text-surface-800 border-2 border-primary-500 ",
//         "hover:bg-primary-600 hover:border-primary-600",
//         "active:bg-primary-700 active:border-primary-700 active:ring-0 ",
//         "focus:bg-primary-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       "900": cn(
//         "bg-primary-900 text-primary-0 border-2 border-primary-900 ",
//         "hover:bg-primary-800 hover:border-primary-800",
//         "active:bg-primary-700 active:border-primary-700 active:ring-0 ",
//         "focus:bg-primary-800 focus:border-primary-700 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       "950": cn(
//         "bg-primary-500 text-surface-950 border-2 border-primary-500 ",
//         "hover:bg-primary-600 hover:border-primary-600",
//         "active:bg-primary-700 active:border-primary-700 active:ring-0 ",
//         "focus:bg-primary-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//     },
//     secondary: {
//       "100": cn(
//         "bg-secondary-500 text-surface-100 border-2 border-secondary-500 ",
//         "hover:bg-secondary-600 hover:border-secondary-600",
//         "active:bg-secondary-700 active:border-secondary-700 active:ring-0 ",
//         "focus:bg-secondary-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       "200": cn(
//         "bg-secondary-500 text-surface-200 border-2 border-secondary-500 ",
//         "hover:bg-secondary-600 hover:border-secondary-600",
//         "active:bg-secondary-700 active:border-secondary-700 active:ring-0 ",
//         "focus:bg-secondary-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       "300": cn(
//         "bg-secondary-500 text-surface-300 border-2 border-secondary-500 ",
//         "hover:bg-secondary-600 hover:border-secondary-600",
//         "active:bg-secondary-700 active:border-secondary-700 active:ring-0 ",
//         "focus:bg-secondary-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       "400": cn(
//         "bg-secondary-500 text-surface-400 border-2 border-secondary-500 ",
//         "hover:bg-secondary-600 hover:border-secondary-600",
//         "active:bg-secondary-700 active:border-secondary-700 active:ring-0 ",
//         "focus:bg-secondary-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       "500": cn(
//         "bg-secondary-500 text-surface-500 border-2 border-secondary-500 ",
//         "hover:bg-secondary-600 hover:border-secondary-600",
//         "active:bg-secondary-700 active:border-secondary-700 active:ring-0 ",
//         "focus:bg-secondary-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       "600": cn(
//         "bg-secondary-500 text-surface-600 border-2 border-secondary-500 ",
//         "hover:bg-secondary-600 hover:border-secondary-600",
//         "active:bg-secondary-700 active:border-secondary-700 active:ring-0 ",
//         "focus:bg-secondary-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       "700": cn(
//         "bg-secondary-500 text-surface-100 border-2 border-secondary-500 ",
//         "hover:bg-secondary-600 hover:border-secondary-600",
//         "active:bg-secondary-700 active:border-secondary-700 active:ring-0 ",
//         "focus:bg-secondary-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       "800": cn(
//         "bg-secondary-500 text-surface-800 border-2 border-secondary-500 ",
//         "hover:bg-secondary-600 hover:border-secondary-600",
//         "active:bg-secondary-700 active:border-secondary-700 active:ring-0 ",
//         "focus:bg-secondary-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       "900": cn(
//         "bg-secondary-500 text-surface-900 border-2 border-secondary-500 ",
//         "hover:bg-secondary-600 hover:border-secondary-600",
//         "active:bg-secondary-700 active:border-secondary-700 active:ring-0 ",
//         "focus:bg-secondary-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       "950": cn(
//         "bg-secondary-500 text-surface-950 border-2 border-secondary-500 ",
//         "hover:bg-secondary-600 hover:border-secondary-600",
//         "active:bg-secondary-700 active:border-secondary-700 active:ring-0 ",
//         "focus:bg-secondary-700 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       )
//     },
//     surface: {
//       "100": cn(
//         "bg-surface-500 text-surface-100 border-2 border-surface-500 ",
//         "hover:bg-surface-600 hover:border-surface-600",
//         "active:bg-surface-700 active:border-surface-700 active:ring-0 ",
//         "focus:bg-surface-700 focus:border-surface-500 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       "200": cn(
//         "bg-surface-500 text-surface-100 border-2 border-surface-500 ",
//         "hover:bg-surface-600 hover:border-surface-600",
//         "active:bg-surface-700 active:border-surface-700 active:ring-0 ",
//         "focus:bg-surface-700 focus:border-surface-500 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       "300": cn(
//         "bg-surface-500 text-surface-300 border-2 border-surface-500 ",
//         "hover:bg-surface-600 hover:border-surface-600",
//         "active:bg-surface-700 active:border-surface-700 active:ring-0 ",
//         "focus:bg-surface-700 focus:border-surface-500 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       "400": cn(
//         "bg-surface-500 text-surface-400 border-2 border-surface-500 ",
//         "hover:bg-surface-600 hover:border-surface-600",
//         "active:bg-surface-700 active:border-surface-700 active:ring-0 ",
//         "focus:bg-surface-700 focus:border-surface-500 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       "500": cn(
//         "bg-surface-500 text-surface-500 border-2 border-surface-500 ",
//         "hover:bg-surface-600 hover:border-surface-600",
//         "active:bg-surface-700 active:border-surface-700 active:ring-0 ",
//         "focus:bg-surface-700 focus:border-surface-500 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       "600": cn(
//         "bg-surface-500 text-surface-600 border-2 border-surface-500 ",
//         "hover:bg-surface-600 hover:border-surface-600",
//         "active:bg-surface-700 active:border-surface-700 active:ring-0 ",
//         "focus:bg-surface-700 focus:border-surface-500 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       "700": cn(
//         "bg-surface-500 text-surface-700 border-2 border-surface-500 ",
//         "hover:bg-surface-600 hover:border-surface-600",
//         "active:bg-surface-700 active:border-surface-700 active:ring-0 ",
//         "focus:bg-surface-700 focus:border-surface-500 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       "800": cn(
//         "bg-surface-500 text-surface-800 border-2 border-surface-500 ",
//         "hover:bg-surface-600 hover:border-surface-600",
//         "active:bg-surface-700 active:border-surface-700 active:ring-0 ",
//         "focus:bg-surface-700 focus:border-surface-500 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       "900": cn(
//         "bg-surface-500 text-surface-900 border-2 border-surface-500 ",
//         "hover:bg-surface-600 hover:border-surface-600",
//         "active:bg-surface-700 active:border-surface-700 active:ring-0 ",
//         "focus:bg-surface-700 focus:border-surface-500 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       "950": cn(
//         "bg-surface-500 text-surface-950 border-2 border-surface-500 ",
//         "hover:bg-surface-600 hover:border-surface-600",
//         "active:bg-surface-700 active:border-surface-700 active:ring-0 ",
//         "focus:bg-surface-700 focus:border-surface-500 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//     },
//     warning: {
//       "100": cn(
//         "bg-warning-500 text-surface-100 border-2 border-warning-500 ",
//         "hover:bg-warning-600 hover:border-warning-600",
//         "active:bg-warning-700 active:border-warning-700 active:ring-0 ",
//         "focus:bg-warning-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       "200": cn(
//         "bg-warning-500 text-surface-200 border-2 border-warning-500 ",
//         "hover:bg-warning-600 hover:border-warning-600",
//         "active:bg-warning-700 active:border-warning-700 active:ring-0 ",
//         "focus:bg-warning-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       "300": cn(
//         "bg-warning-500 text-surface-300 border-2 border-warning-500 ",
//         "hover:bg-warning-600 hover:border-warning-600",
//         "active:bg-warning-700 active:border-warning-700 active:ring-0 ",
//         "focus:bg-warning-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       "400": cn(
//         "bg-warning-500 text-surface-400 border-2 border-warning-500 ",
//         "hover:bg-warning-600 hover:border-warning-600",
//         "active:bg-warning-700 active:border-warning-700 active:ring-0 ",
//         "focus:bg-warning-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       "500": cn(
//         "bg-warning-500 text-surface-500 border-2 border-warning-500 ",
//         "hover:bg-warning-600 hover:border-warning-600",
//         "active:bg-warning-700 active:border-warning-700 active:ring-0 ",
//         "focus:bg-warning-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       "600": cn(
//         "bg-warning-500 text-surface-600 border-2 border-warning-500 ",
//         "hover:bg-warning-600 hover:border-warning-600",
//         "active:bg-warning-700 active:border-warning-700 active:ring-0 ",
//         "focus:bg-warning-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       "700": cn(
//         "bg-warning-500 text-surface-700 border-2 border-warning-500 ",
//         "hover:bg-warning-600 hover:border-warning-600",
//         "active:bg-warning-700 active:border-warning-700 active:ring-0 ",
//         "focus:bg-warning-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       "800": cn(
//         "bg-warning-500 text-surface-800 border-2 border-warning-500 ",
//         "hover:bg-warning-600 hover:border-warning-600",
//         "active:bg-warning-700 active:border-warning-700 active:ring-0 ",
//         "focus:bg-warning-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       "900": cn(
//         "bg-warning-500 text-surface-900 border-2 border-warning-500 ",
//         "hover:bg-warning-600 hover:border-warning-600",
//         "active:bg-warning-700 active:border-warning-700 active:ring-0 ",
//         "focus:bg-warning-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       "950": cn(
//         "bg-warning-500 text-surface-950 border-2 border-warning-500 ",
//         "hover:bg-warning-600 hover:border-warning-600",
//         "active:bg-warning-700 active:border-warning-700 active:ring-0 ",
//         "focus:bg-warning-700 focus:border-warning-500 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       )
//     },
//     error: {
//       "100": cn(
//         "bg-error-500 text-surface-100 border-2 border-error-500 ",
//         "hover:bg-error-600 hover:border-error-600",
//         "active:bg-error-700 active:border-error-700 active:ring-0 ",
//         "focus:bg-error-700 focus:border-error-500 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       "200": cn(
//         "bg-error-500 text-surface-200 border-2 border-error-500 ",
//         "hover:bg-error-600 hover:border-error-600",
//         "active:bg-error-700 active:border-error-700 active:ring-0 ",
//         "focus:bg-error-700 focus:border-error-500 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       "300": cn(
//         "bg-error-500 text-surface-300 border-2 border-error-500 ",
//         "hover:bg-error-600 hover:border-error-600",
//         "active:bg-error-700 active:border-error-700 active:ring-0 ",
//         "focus:bg-error-700 focus:border-error-500 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       "400": cn(
//         "bg-error-500 text-surface-400 border-2 border-error-500 ",
//         "hover:bg-error-600 hover:border-error-600",
//         "active:bg-error-700 active:border-error-700 active:ring-0 ",
//         "focus:bg-error-700 focus:border-error-500 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       "500": cn(
//         "bg-error-500 text-surface-500 border-2 border-error-500 ",
//         "hover:bg-error-600 hover:border-error-600",
//         "active:bg-error-700 active:border-error-700 active:ring-0 ",
//         "focus:bg-error-700 focus:border-error-500 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       "600": cn(
//         "bg-error-500 text-surface-600 border-2 border-error-500 ",
//         "hover:bg-error-600 hover:border-error-600",
//         "active:bg-error-700 active:border-error-700 active:ring-0 ",
//         "focus:bg-error-700 focus:border-error-500 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       "700": cn(
//         "bg-error-500 text-surface-700 border-2 border-error-500 ",
//         "hover:bg-error-600 hover:border-error-600",
//         "active:bg-error-700 active:border-error-700 active:ring-0 ",
//         "focus:bg-error-700 focus:border-error-500 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       "800": cn(
//         "bg-error-500 text-surface-800 border-2 border-error-500 ",
//         "hover:bg-error-600 hover:border-error-600",
//         "active:bg-error-700 active:border-error-700 active:ring-0 ",
//         "focus:bg-error-700 focus:border-error-500 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       "900": cn(
//         "bg-error-500 text-surface-900 border-2 border-error-500 ",
//         "hover:bg-error-600 hover:border-error-600",
//         "active:bg-error-700 active:border-error-700 active:ring-0 ",
//         "focus:bg-error-700 focus:border-error-500 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       "950": cn(
//         "bg-error-500 text-surface-950 border-2 border-error-500 ",
//         "hover:bg-error-600 hover:border-error-600",
//         "active:bg-error-700 active:border-error-700 active:ring-0 ",
//         "focus:bg-error-700 focus:border-error-500 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//     },
//     success: {
//       "100": cn(
//         "bg-success-500 text-surface-100 border-2 border-success-500 ",
//         "hover:bg-success-600 hover:border-success-600",
//         "active:bg-success-700 active:border-success-700 active:ring-0 ",
//         "focus:bg-success-700 focus:border-success-500 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       "200": cn(
//         "bg-success-500 text-surface-200 border-2 border-success-500 ",
//         "hover:bg-success-600 hover:border-success-600",
//         "active:bg-success-700 active:border-success-700 active:ring-0 ",
//         "focus:bg-success-700 focus:border-success-500 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       "300": cn(
//         "bg-success-500 text-surface-300 border-2 border-success-500 ",
//         "hover:bg-success-600 hover:border-success-600",
//         "active:bg-success-700 active:border-success-700 active:ring-0 ",
//         "focus:bg-success-700 focus:border-success-500 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       "400": cn(
//         "bg-success-500 text-surface-400 border-2 border-success-500 ",
//         "hover:bg-success-600 hover:border-success-600",
//         "active:bg-success-700 active:border-success-700 active:ring-0 ",
//         "focus:bg-success-700 focus:border-success-500 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       "500": cn(
//         "bg-success-500 text-surface-500 border-2 border-success-500 ",
//         "hover:bg-success-600 hover:border-success-600",
//         "active:bg-success-700 active:border-success-700 active:ring-0 ",
//         "focus:bg-success-700 focus:border-success-500 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       "600": cn(
//         "bg-success-500 text-surface-600 border-2 border-success-500 ",
//         "hover:bg-success-600 hover:border-success-600",
//         "active:bg-success-700 active:border-success-700 active:ring-0 ",
//         "focus:bg-success-700 focus:border-success-500 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       "700": cn(
//         "bg-success-500 text-surface-700 border-2 border-success-500 ",
//         "hover:bg-success-600 hover:border-success-600",
//         "active:bg-success-700 active:border-success-700 active:ring-0 ",
//         "focus:bg-success-700 focus:border-success-500 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       "800": cn(
//         "bg-success-500 text-surface-800 border-2 border-success-500 ",
//         "hover:bg-success-600 hover:border-success-600",
//         "active:bg-success-700 active:border-success-700 active:ring-0 ",
//         "focus:bg-success-700 focus:border-success-500 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       "900": cn(
//         "bg-success-500 text-surface-900 border-2 border-success-500 ",
//         "hover:bg-success-600 hover:border-success-600",
//         "active:bg-success-700 active:border-success-700 active:ring-0 ",
//         "focus:bg-success-700 focus:border-success-500 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       "950": cn(
//         "bg-success-500 text-surface-950 border-2 border-success-500 ",
//         "hover:bg-success-600 hover:border-success-600",
//         "active:bg-success-700 active:border-success-700 active:ring-0 ",
//         "focus:bg-success-700 focus:border-success-500 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       )
//     },
//     info: {
//       "100": cn(
//         "bg-info-500 text-surface-100 border-2 border-info-500 ",
//         "hover:bg-info-600 hover:border-info-600",
//         "active:bg-info-700 active:border-info-700 active:ring-0 ",
//         "focus:bg-info-700 focus:border-info-500 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       "200": cn(
//         "bg-info-500 text-surface-200 border-2 border-info-500 ",
//         "hover:bg-info-600 hover:border-info-600",
//         "active:bg-info-700 active:border-info-700 active:ring-0 ",
//         "focus:bg-info-700 focus:border-info-500 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       "300": cn(
//         "bg-info-500 text-surface-300 border-2 border-info-500 ",
//         "hover:bg-info-600 hover:border-info-600",
//         "active:bg-info-700 active:border-info-700 active:ring-0 ",
//         "focus:bg-info-700 focus:border-info-500 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       "400": cn(
//         "bg-info-500 text-surface-400 border-2 border-info-500 ",
//         "hover:bg-info-600 hover:border-info-600",
//         "active:bg-info-700 active:border-info-700 active:ring-0 ",
//         "focus:bg-info-700 focus:border-info-500 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       "500": cn(
//         "bg-info-500 text-surface-500 border-2 border-info-500 ",
//         "hover:bg-info-600 hover:border-info-600",
//         "active:bg-info-700 active:border-info-700 active:ring-0 ",
//         "focus:bg-info-700 focus:border-info-500 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       "600": cn(
//         "bg-info-500 text-surface-600 border-2 border-info-500 ",
//         "hover:bg-info-600 hover:border-info-600",
//         "active:bg-info-700 active:border-info-700 active:ring-0 ",
//         "focus:bg-info-700 focus:border-info-500 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       "700": cn(
//         "bg-info-500 text-surface-700 border-2 border-info-500 ",
//         "hover:bg-info-600 hover:border-info-600",
//         "active:bg-info-700 active:border-info-700 active:ring-0 ",
//         "focus:bg-info-700 focus:border-info-500 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       "800": cn(
//         "bg-info-500 text-surface-800 border-2 border-info-500 ",
//         "hover:bg-info-600 hover:border-info-600",
//         "active:bg-info-700 active:border-info-700 active:ring-0 ",
//         "focus:bg-info-700 focus:border-info-500 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       "900": cn(
//         "bg-info-500 text-surface-900 border-2 border-info-500 ",
//         "hover:bg-info-600 hover:border-info-600",
//         "active:bg-info-700 active:border-info-700 active:ring-0 ",
//         "focus:bg-info-700 focus:border-info-500 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       "950": cn(
//         "bg-info-500 text-surface-950 border-2 border-info-500 ",
//         "hover:bg-info-600 hover:border-info-600",
//         "active:bg-info-700 active:border-info-700 active:ring-0 ",
//         "focus:bg-info-700 focus:border-info-500 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       )
//     },
//   },
//   outlined: {
//     primary: {
//       100: cn(
//         "bg-transparent text-primary-100 border-2 border-primary-100  ",
//         "hover:bg-primary-100 hover:opacity-50 hover:text-primary-700",
//         "active:bg-primary-100 active:text-primary-700",
//         "focus:bg-primary-100 focus:border-primary-200 focus:ring-2 focus:ring-primary-50 focus:outline-none focus:text-primary-700"
//       ),
//       200: cn(
//         "bg-transparent text-primary-200 border-2 border-primary-200  ",
//         "hover:bg-primary-200 hover:opacity-50 hover:text-primary-900",
//         "active:bg-primary-200 active:text-primary-900 ",
//         "focus:bg-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none focus:text-primary-900"
//       ),
//       300: cn(
//         "bg-transparent text-primary-300 border-2 border-primary-300  ",
//         "hover:bg-primary-100 hover:opacity-50 ",
//         "active:bg-primary-100 ",
//         "focus:bg-primary-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       400: cn(
//         "bg-transparent text-primary-400 border-2 border-primary-400  ",
//         "hover:bg-primary-100 hover:opacity-50 ",
//         "active:bg-primary-100 ",
//         "focus:bg-primary-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       500: cn(
//         "bg-transparent text-primary-500 border-2 border-primary-500  ",
//         "hover:bg-primary-100 hover:opacity-50 ",
//         "active:bg-primary-100 ",
//         "focus:bg-primary-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       600: cn(
//         "bg-transparent text-primary-600 border-2 border-primary-600  ",
//         "hover:bg-primary-100 hover:opacity-50 ",
//         "active:bg-primary-100 ",
//         "focus:bg-primary-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       700: cn(
//         "bg-transparent text-primary-700 border-2 border-primary-700 ",
//         "hover:bg-primary-100 hover:opacity-50 ",
//         "active:bg-primary-100 ",
//         "focus:bg-primary-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       800: cn(
//         "bg-transparent text-primary-800 border-2 border-primary-800  ",
//         "hover:bg-primary-100 hover:opacity-50 ",
//         "active:bg-primary-100 ",
//         "focus:bg-primary-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       900: cn(
//         "bg-transparent text-primary-900 border-2 border-primary-900  ",
//         "hover:bg-primary-100 hover:opacity-50 ",
//         "active:bg-primary-100 ",
//         "focus:bg-primary-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       ),
//       950: cn(
//         "bg-transparent text-primary-950 border-2 border-primary-950  ",
//         "hover:bg-primary-100 hover:opacity-50 ",
//         "active:bg-primary-100 ",
//         "focus:bg-primary-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus:outline-none"
//       )
//     },
//     secondary: {
//       100: cn(
//         "bg-transparent text-secondary-100 border-2 border-secondary-100  ",
//         "hover:bg-secondary-100 hover:opacity-50 ",
//         "active:bg-secondary-100 ",
//         "focus:bg-secondary-100 focus:border-secondary-700 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       200: cn(
//         "bg-transparent text-secondary-200 border-2 border-secondary-200  ",
//         "hover:bg-secondary-100 hover:opacity-50 ",
//         "active:bg-secondary-100 ",
//         "focus:bg-secondary-100 focus:border-secondary-700 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       300: cn(
//         "bg-transparent text-secondary-300 border-2 border-secondary-300  ",
//         "hover:bg-secondary-100 hover:opacity-50 ",
//         "active:bg-secondary-100 ",
//         "focus:bg-secondary-100 focus:border-secondary-700 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       400: cn(
//         "bg-transparent text-secondary-400 border-2 border-secondary-400  ",
//         "hover:bg-secondary-100 hover:opacity-50 ",
//         "active:bg-secondary-100 ",
//         "focus:bg-secondary-100 focus:border-secondary-700 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       500: cn(
//         "bg-transparent text-secondary-500 border-2 border-secondary-500  ",
//         "hover:bg-secondary-100 hover:opacity-50 ",
//         "active:bg-secondary-100 ",
//         "focus:bg-secondary-100 focus:border-secondary-700 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       600: cn(
//         "bg-transparent text-secondary-600 border-2 border-secondary-600  ",
//         "hover:bg-secondary-100 hover:opacity-50 ",
//         "active:bg-secondary-100 ",
//         "focus:bg-secondary-100 focus:border-secondary-700 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       700: cn(
//         "bg-transparent text-secondary-700 border-2 border-secondary-700  ",
//         "hover:bg-secondary-100 hover:opacity-50 ",
//         "active:bg-secondary-100 ",
//         "focus:bg-secondary-100 focus:border-secondary-700 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       800: cn(
//         "bg-transparent text-secondary-800 border-2 border-secondary-800  ",
//         "hover:bg-secondary-100 hover:opacity-50 ",
//         "active:bg-secondary-100 ",
//         "focus:bg-secondary-100 focus:border-secondary-700 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       900: cn(
//         "bg-transparent text-secondary-900 border-2 border-secondary-900  ",
//         "hover:bg-secondary-100 hover:opacity-50 ",
//         "active:bg-secondary-100 ",
//         "focus:bg-secondary-100 focus:border-secondary-700 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       ),
//       950: cn(
//         "bg-transparent text-secondary-950 border-2 border-secondary-950  ",
//         "hover:bg-secondary-100 hover:opacity-50 ",
//         "active:bg-secondary-100 ",
//         "focus:bg-secondary-100 focus:border-secondary-700 focus:ring-2 focus:ring-secondary-50 focus:outline-none"
//       )
//     },
//     surface: {
//       100: cn(
//         "bg-transparent text-surface-100 border-2 border-surface-100  ",
//         "hover:bg-surface-100 hover:opacity-50 ",
//         "active:bg-surface-100 ",
//         "focus:bg-surface-100 focus:border-surface-700 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       200: cn(
//         "bg-transparent text-surface-200 border-2 border-surface-200  ",
//         "hover:bg-surface-100 hover:opacity-50 ",
//         "active:bg-surface-100 ",
//         "focus:bg-surface-100 focus:border-surface-700 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       300: cn(
//         "bg-transparent text-surface-300 border-2 border-surface-300  ",
//         "hover:bg-surface-100 hover:opacity-50 ",
//         "active:bg-surface-100 ",
//         "focus:bg-surface-100 focus:border-surface-700 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       400: cn(
//         "bg-transparent text-surface-400 border-2 border-surface-400  ",
//         "hover:bg-surface-100 hover:opacity-50 ",
//         "active:bg-surface-100 ",
//         "focus:bg-surface-100 focus:border-surface-700 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       500: cn(
//         "bg-transparent text-surface-500 border-2 border-surface-500  ",
//         "hover:bg-surface-100 hover:opacity-50 ",
//         "active:bg-surface-100 ",
//         "focus:bg-surface-100 focus:border-surface-700 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       600: cn(
//         "bg-transparent text-surface-600 border-2 border-surface-600  ",
//         "hover:bg-surface-100 hover:opacity-50 ",
//         "active:bg-surface-100 ",
//         "focus:bg-surface-100 focus:border-surface-700 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       700: cn(
//         "bg-transparent text-surface-700 border-2 border-surface-700  ",
//         "hover:bg-surface-100 hover:opacity-50 ",
//         "active:bg-surface-100 ",
//         "focus:bg-surface-100 focus:border-surface-700 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       800: cn(
//         "bg-transparent text-surface-800 border-2 border-surface-800  ",
//         "hover:bg-surface-100 hover:opacity-50 ",
//         "active:bg-surface-100 ",
//         "focus:bg-surface-100 focus:border-surface-700 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       900: cn(
//         "bg-transparent text-surface-900 border-2 border-surface-900  ",
//         "hover:bg-surface-100 hover:opacity-50 ",
//         "active:bg-surface-100 ",
//         "focus:bg-surface-100 focus:border-surface-700 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       ),
//       950: cn(
//         "bg-transparent text-surface-950 border-2 border-surface-950  ",
//         "hover:bg-surface-100 hover:opacity-50 ",
//         "active:bg-surface-100 ",
//         "focus:bg-surface-100 focus:border-surface-700 focus:ring-2 focus:ring-surface-50 focus:outline-none"
//       )
//     },
//     warning: {
//       100: cn(
//         "bg-transparent text-warning-100 border-2 border-warning-100  ",
//         "hover:bg-warning-100 hover:opacity-50 ",
//         "active:bg-warning-100 ",
//         "focus:bg-warning-100 focus:border-warning-700 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       200: cn(
//         "bg-transparent text-warning-200 border-2 border-warning-200  ",
//         "hover:bg-warning-100 hover:opacity-50 ",
//         "active:bg-warning-100 ",
//         "focus:bg-warning-100 focus:border-warning-700 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       300: cn(
//         "bg-transparent text-warning-300 border-2 border-warning-300  ",
//         "hover:bg-warning-100 hover:opacity-50 ",
//         "active:bg-warning-100 ",
//         "focus:bg-warning-100 focus:border-warning-700 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       400: cn(
//         "bg-transparent text-warning-400 border-2 border-warning-400  ",
//         "hover:bg-warning-100 hover:opacity-50 ",
//         "active:bg-warning-100 ",
//         "focus:bg-warning-100 focus:border-warning-700 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       500: cn(
//         "bg-transparent text-warning-500 border-2 border-warning-500  ",
//         "hover:bg-warning-100 hover:opacity-50 ",
//         "active:bg-warning-100 ",
//         "focus:bg-warning-100 focus:border-warning-700 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       600: cn(
//         "bg-transparent text-warning-600 border-2 border-warning-600  ",
//         "hover:bg-warning-100 hover:opacity-50 ",
//         "active:bg-warning-100 ",
//         "focus:bg-warning-100 focus:border-warning-700 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       700: cn(
//         "bg-transparent text-warning-700 border-2 border-warning-700  ",
//         "hover:bg-warning-100 hover:opacity-50 ",
//         "active:bg-warning-100 ",
//         "focus:bg-warning-100 focus:border-warning-700 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       800: cn(
//         "bg-transparent text-warning-800 border-2 border-warning-800  ",
//         "hover:bg-warning-100 hover:opacity-50 ",
//         "active:bg-warning-100 ",
//         "focus:bg-warning-100 focus:border-warning-700 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       900: cn(
//         "bg-transparent text-warning-900 border-2 border-warning-900  ",
//         "hover:bg-warning-100 hover:opacity-50 ",
//         "active:bg-warning-100 ",
//         "focus:bg-warning-100 focus:border-warning-700 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       ),
//       950: cn(
//         "bg-transparent text-warning-950 border-2 border-warning-950  ",
//         "hover:bg-warning-100 hover:opacity-50 ",
//         "active:bg-warning-100 ",
//         "focus:bg-warning-100 focus:border-warning-700 focus:ring-2 focus:ring-warning-50 focus:outline-none"
//       )
//     },
//     error: {
//       100: cn(
//         "bg-transparent text-error-100 border-2 border-error-100  ",
//         "hover:bg-error-100 hover:opacity-50 ",
//         "active:bg-error-100 ",
//         "focus:bg-error-100 focus:border-error-700 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       200: cn(
//         "bg-transparent text-error-200 border-2 border-error-200  ",
//         "hover:bg-error-100 hover:opacity-50 ",
//         "active:bg-error-100 ",
//         "focus:bg-error-100 focus:border-error-700 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       300: cn(
//         "bg-transparent text-error-300 border-2 border-error-300  ",
//         "hover:bg-error-100 hover:opacity-50 ",
//         "active:bg-error-100 ",
//         "focus:bg-error-100 focus:border-error-700 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       400: cn(
//         "bg-transparent text-error-400 border-2 border-error-400  ",
//         "hover:bg-error-100 hover:opacity-50 ",
//         "active:bg-error-100 ",
//         "focus:bg-error-100 focus:border-error-700 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       500: cn(
//         "bg-transparent text-error-500 border-2 border-error-500  ",
//         "hover:bg-error-100 hover:opacity-50 ",
//         "active:bg-error-100 ",
//         "focus:bg-error-100 focus:border-error-700 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       600: cn(
//         "bg-transparent text-error-600 border-2 border-error-600  ",
//         "hover:bg-error-100 hover:opacity-50 ",
//         "active:bg-error-100 ",
//         "focus:bg-error-100 focus:border-error-700 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       700: cn(
//         "bg-transparent text-error-700 border-2 border-error-700  ",
//         "hover:bg-error-100 hover:opacity-50 ",
//         "active:bg-error-100 ",
//         "focus:bg-error-100 focus:border-error-700 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       800: cn(
//         "bg-transparent text-error-800 border-2 border-error-800  ",
//         "hover:bg-error-100 hover:opacity-50 ",
//         "active:bg-error-100 ",
//         "focus:bg-error-100 focus:border-error-700 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       900: cn(
//         "bg-transparent text-error-900 border-2 border-error-900  ",
//         "hover:bg-error-100 hover:opacity-50 ",
//         "active:bg-error-100 ",
//         "focus:bg-error-100 focus:border-error-700 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       ),
//       950: cn(
//         "bg-transparent text-error-950 border-2 border-error-950  ",
//         "hover:bg-error-100 hover:opacity-50 ",
//         "active:bg-error-100 ",
//         "focus:bg-error-100 focus:border-error-700 focus:ring-2 focus:ring-error-50 focus:outline-none"
//       )
//     },
//     success: {
//       100: cn(
//         "bg-transparent text-success-100 border-2 border-success-100  ",
//         "hover:bg-success-100 hover:opacity-50 ",
//         "active:bg-success-100 ",
//         "focus:bg-success-100 focus:border-success-700 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       200: cn(
//         "bg-transparent text-success-200 border-2 border-success-200  ",
//         "hover:bg-success-100 hover:opacity-50 ",
//         "active:bg-success-100 ",
//         "focus:bg-success-100 focus:border-success-700 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       300: cn(
//         "bg-transparent text-success-300 border-2 border-success-300  ",
//         "hover:bg-success-100 hover:opacity-50 ",
//         "active:bg-success-100 ",
//         "focus:bg-success-100 focus:border-success-700 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       400: cn(
//         "bg-transparent text-success-400 border-2 border-success-400  ",
//         "hover:bg-success-100 hover:opacity-50 ",
//         "active:bg-success-100 ",
//         "focus:bg-success-100 focus:border-success-700 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       500: cn(
//         "bg-transparent text-success-500 border-2 border-success-500  ",
//         "hover:bg-success-100 hover:opacity-50 ",
//         "active:bg-success-100 ",
//         "focus:bg-success-100 focus:border-success-700 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       600: cn(
//         "bg-transparent text-success-600 border-2 border-success-600  ",
//         "hover:bg-success-100 hover:opacity-50 ",
//         "active:bg-success-100 ",
//         "focus:bg-success-100 focus:border-success-700 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       700: cn(
//         "bg-transparent text-success-700 border-2 border-success-700  ",
//         "hover:bg-success-100 hover:opacity-50 ",
//         "active:bg-success-100 ",
//         "focus:bg-success-100 focus:border-success-700 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       800: cn(
//         "bg-transparent text-success-800 border-2 border-success-800  ",
//         "hover:bg-success-100 hover:opacity-50 ",
//         "active:bg-success-100 ",
//         "focus:bg-success-100 focus:border-success-700 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       900: cn(
//         "bg-transparent text-success-900 border-2 border-success-900  ",
//         "hover:bg-success-100 hover:opacity-50 ",
//         "active:bg-success-100 ",
//         "focus:bg-success-100 focus:border-success-700 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       ),
//       950: cn(
//         "bg-transparent text-success-950 border-2 border-success-950  ",
//         "hover:bg-success-100 hover:opacity-50 ",
//         "active:bg-success-100 ",
//         "focus:bg-success-100 focus:border-success-700 focus:ring-2 focus:ring-success-50 focus:outline-none"
//       )
//     },
//     info: {
//       100: cn(
//         "bg-transparent text-info-100 border-2 border-info-100  ",
//         "hover:bg-info-100 hover:opacity-50 ",
//         "active:bg-info-100 ",
//         "focus:bg-info-100 focus:border-info-700 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       200: cn(
//         "bg-transparent text-info-200 border-2 border-info-200  ",
//         "hover:bg-info-100 hover:opacity-50 ",
//         "active:bg-info-100 ",
//         "focus:bg-info-100 focus:border-info-700 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       300: cn(
//         "bg-transparent text-info-300 border-2 border-info-300  ",
//         "hover:bg-info-100 hover:opacity-50 ",
//         "active:bg-info-100 ",
//         "focus:bg-info-100 focus:border-info-700 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       400: cn(
//         "bg-transparent text-info-400 border-2 border-info-400  ",
//         "hover:bg-info-100 hover:opacity-50 ",
//         "active:bg-info-100 ",
//         "focus:bg-info-100 focus:border-info-700 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       500: cn(
//         "bg-transparent text-info-500 border-2 border-info-500  ",
//         "hover:bg-info-100 hover:opacity-50 ",
//         "active:bg-info-100 ",
//         "focus:bg-info-100 focus:border-info-700 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       600: cn(
//         "bg-transparent text-info-600 border-2 border-info-600  ",
//         "hover:bg-info-100 hover:opacity-50 ",
//         "active:bg-info-100 ",
//         "focus:bg-info-100 focus:border-info-700 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       700: cn(
//         "bg-transparent text-info-700 border-2 border-info-700  ",
//         "hover:bg-info-100 hover:opacity-50 ",
//         "active:bg-info-100 ",
//         "focus:bg-info-100 focus:border-info-700 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       800: cn(
//         "bg-transparent text-info-800 border-2 border-info-800  ",
//         "hover:bg-info-100 hover:opacity-50 ",
//         "active:bg-info-100 ",
//         "focus:bg-info-100 focus:border-info-700 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       900: cn(
//         "bg-transparent text-info-900 border-2 border-info-900  ",
//         "hover:bg-info-100 hover:opacity-50 ",
//         "active:bg-info-100 ",
//         "focus:bg-info-100 focus:border-info-700 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       ),
//       950: cn(
//         "bg-transparent text-info-950 border-2 border-info-950  ",
//         "hover:bg-info-100 hover:opacity-50 ",
//         "active:bg-info-100 ",
//         "focus:bg-info-100 focus:border-info-700 focus:ring-2 focus:ring-info-50 focus:outline-none"
//       )
//     },
//   },
//   transparent: cn(
//     "bg-transparent text-surface-900 ",
//     "hover:text-surface-800 hover:bg-surface-100",
//     "active:bg-surface-200  active:ring-0 active:border-0 active:text-surface-900 ",
//     "focus:border-2 focus:border-surface-900"
//   ),
//   invisible: cn(
//     "text-surface-800",
//   ),
//   custom: ""
// };

// const commonClasses: string = cn(
//   "flex",
//   "relative",
//   "min-w-40 max-w-full",
//   "font-bold font-headings",
//   "items-center justify-center"
// );

// const disabledVariants: ButtonVariant = {
//   solid: cn("cursor-not-allowed", "bg-surface-200", "text-surface-400"),
//   transparent: cn("cursor-not-allowed text-surface-400"),
//   outlined: cn(
//     "cursor-not-allowed",
//     "bg-transparent",
//     "text-surface-400",
//     "border-2 border-surface-400"
//   ),
//   "invisible": cn(
//     "cursor-not-allowed",
//     "bg-transparent",
//     "text-surface-400",
//     "border border-surface-400"
//   ),
//   custom: "" 
// };

// const Button: React.FC<ButtonType> = (props: ButtonType) => {
//   const {
//     className = "",
//     disabled = false,
//     size = "md",
//     variant = "solid",
//     children,
//     color,
//     intensity,
//     onClick,
//   } = props;

//   let filteredClasses = {
//     [disabledVariants[variant]]: disabled,
//     ["cursor-pointer"]: !disabled
//   }

//   if(variant === "solid" || variant === "outlined"){
//     filteredClasses= {
//       [variants[variant][color][intensity]]: !disabled && (variant === "solid" || variant === "outlined"), 
//       ...filteredClasses
//     }
//   }

//   if(variant === "invisible" || variant === "transparent"){
//     filteredClasses= {
//       [variants[variant]]: !disabled && (variant === "invisible" || variant === "transparent"), 
//       ...filteredClasses
//     }
//   }
//   const buttonClasses: string = cn(commonClasses, [sizes[size]], className, filteredClasses);

//   return (
//     <button className={buttonClasses} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

export default Button;
