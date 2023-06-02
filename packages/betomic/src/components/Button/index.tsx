
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
  /**
   * If set to `true`, the button will display a centered loading spinner instead of its contents, and the button will be disabled.
   * The width of the button is not affected by the value of this prop.
   *
   * @default false
   */
  loading?: boolean;
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
    loading = false,
    icon = false,
    size = "md",
    type,
    variant = "primary",
    onClick,
    ...restProps 
  } = props;
  const isDisabled = disabled || loading;

  const buttonDisabledClasses = cn("bg-surface-50", "border", "border-transparent", "text-surface-300", "cursor-not-allowed", "hover:bg-surface-50", "focus:bg-surface-50", commonClasses);

  const renderChildren = () => {
    const sizes = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-7 w-7'
    };
    return [
      loading && <svg className={cn("animate-spin text-surface-400", sizes[size])} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>,
      !loading && children,
    ];
  }

  const buttonClasses = cn(
    className, {
      [Sizes[size]]: !icon,
      [SizesIcon[size]]: icon,
      [Variants[variant]]: !isDisabled,
      [buttonDisabledClasses]: isDisabled,
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
      {renderChildren()}
    </button>
  );
}

export default Button;