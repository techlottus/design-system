
import React, { ButtonHTMLAttributes, MouseEvent } from "react";
import cn from "classnames";

const Sizes = {
  sm: cn("px-4 py-1.5 text-sm h-8"),
  md: cn("px-5 py-3 text-base h-12"),
  lg: cn("px-6 py-4 text-xl h-15")
};

type Size = keyof typeof Sizes;

const SizesIcon = {
  sm: cn("p-1.5 w-8 h-8"),
  md: cn("p-3.5 w-12 h-12"),
  lg: cn("p-4 w-15 h-15")
};

const commonClasses = cn("rounded", "flex", "justify-center", "items-center", "font-montserrat", "font-bold", "focus:outline-none", "focus:border-primary-500", "focus:ring-2", "focus:ring-primary-200");

const Variants = {
  primary: cn("bg-primary-500", "text-white", "border", "border-transparent", "hover:bg-primary-600", "focus:bg-primary-600", "focus:border", commonClasses),
  secondary: cn("bg-surface-600", "text-white", "border", "border-transparent", "hover:bg-surface-900", "focus:bg-surface-900", "focus:border", commonClasses),
  tertiary: cn("bg-white", "text-surface-600", "border-2", "border-surface-500", "hover:bg-surface-500", "hover:text-white", "focus:bg-surface-500", "focus:text-white",
    "dark:bg-transparent", "dark:text-white", "dark:border-white", "dark:hover:bg-surface-50", "dark:hover:text-surface-600", "dark:focus:bg-surface-50", "dark:focus:text-surface-600", "dark:focus:border-primary-500", commonClasses)
};

type Variant = keyof typeof Variants;

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: boolean;
  size?: Size;
  type?: "button" | "submit" | "reset";
  variant?: Variant;
  style?: React.CSSProperties;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

const Button: React.FC<IButton> = (props: IButton) => {

  const { 
    block = false,
    children,
    className,
    disabled = false,
    icon = false,
    size = "md",
    type,
    variant = "primary",
    onClick, 
    ...restProps 
  } = props;

  const buttonDisabledClasses = cn("bg-surface-50", "text-surface-300", "cursor-not-allowed", "hover:bg-surface-50", "focus:bg-surface-50", commonClasses);

  const buttonClasses = cn(
    className, {
      [Sizes[size]]: !icon,
      [SizesIcon[size]]: icon,
      [Variants[variant]]: !disabled,
      [buttonDisabledClasses]: disabled,
      ["w-full"]: block,
    }
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;