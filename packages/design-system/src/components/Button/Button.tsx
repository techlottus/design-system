import cn from "classnames";
import { buttonTypes } from "../Types";

const sizes = {
  xsm: cn("px-4 py-3 text-sm rounded"),
  sm: cn("py-4 px-8 text-base rounded-lg"),
  md: cn("py-5 px-9 text-xl rounded-lg"),
  lg: cn("py-6 px-12 text-xl rounded-lg"),
};
type Size = keyof typeof sizes;

const variants = {
  primary: cn(
    "bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-600 active:bg-neutral-600",
    "text-neutral-100",
    "border border-neutral-900 active:border-0 active:ring-0 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
  ),
  outlined: cn(
    "bg-transparent hover:bg-neutral-200 active:bg-neutral-400 focus:bg-neutral-100",
    "text-neutral-900",
    " border border-transparent focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
  ),
  text: cn(
    "bg-transparent hover:bg-neutral-200 active:bg-neutral-400 ",
    "text-neutral-900 hover:text-neutral-900",
    "active:ring-0 active:border-0 focus:border focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 "
  ),
  "outlined-negative": cn(
    "bg-transparent text-neutral-100 border border-neutral-100  ",
    "hover:bg-neutral-100 hover:border-neutral-900 hover:text-neutral-900",
    "active:ring-0 active:border-0 active:bg-neutral-400 active:text-neutral-100 ",
    "focus:border focus:border-neutral-100 focus:ring-1 focus:ring-neutral-100 "
  ),
};
type Variant = keyof typeof variants;

const commonClasses = cn(
  "flex",
  "relative",
  "min-w-40 max-w-full",
  "font-bold font-principal",
  "items-center justify-center"
);
const isDisabled = {
  primary: cn("cursor-not-allowed", "bg-neutral-400", "text-neutral-100"),
  text: cn("cursor-not-allowed text-neutral-400"),
  outlined: cn(
    "cursor-not-allowed",
    "bg-transparent",
    "text-neutral-400",
    "border border-neutral-400"
  ),
  "outlined-negative": cn(
    "cursor-not-allowed",
    "bg-transparent",
    "text-neutral-200",
    "border border-neutral-200"
  ),
};

interface IButton extends buttonTypes {
  size?: Size;
  variant?: Variant;
}

const Button: React.FC<IButton> = (props: IButton) => {
  const {
    id = "btn",
    className = "",
    disabled = false,
    children,
    size = "md",
    variant = "primary",
    onClick,
    type = "button",
    ...restProps
  } = props;
  const buttonClasses = cn(commonClasses, className, {
    [sizes[size]]: true,
    [variants[variant]]: !disabled,
    [isDisabled[variant]]: disabled,
    ["cursor-pointer"]: !disabled,
  });
  return (
    <button
      id={id}
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
