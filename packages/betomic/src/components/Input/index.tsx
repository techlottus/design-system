import React from "react";
import type { InputHTMLAttributes } from "react";
import cn from "classnames";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  isValid?: boolean | null;
}

const Input: React.FC<IInput> = (props) => {
  const {
    isValid = null,
    disabled = false,
    type = "text",
    style,
    ...restProps
  } = props;
  const inputClasses = cn(
    "rounded p-3 h-10 w-full",
    "font-rubik font-normal text-base text-surface-700 bg-surface-100 placeholder-surface-400",
    "border-2 border-transparent focus:outline-none focus:bg-white",
    "hover:border-surface-200",
    {
      ["border-success-400 bg-white hover:border-success-400"]: (isValid !== null && isValid),
      ["border-error-400 bg-white hover:border-error-400"]: (isValid !== null && !isValid),
      ["focus:ring-primary-500 focus:ring-opacity-40 focus:ring-2 focus:border-primary-500"]: (isValid === null),
      ["bg-surface-100 pointer-events-none"]: disabled
    }
  );

  return <input className={inputClasses} type={type} {...restProps} />
}

export default Input;
