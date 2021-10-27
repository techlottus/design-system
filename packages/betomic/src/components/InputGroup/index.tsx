import React from "react";
import type { InputHTMLAttributes } from "react";
import cn from "classnames";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  isValid?: boolean | null;
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
}

const Input = React.forwardRef((props: IInput, ref: React.Ref<HTMLInputElement>) => {
  const {
    isValid = null,
    disabled = false,
    type = "text",
    style,
    className,
    leftElement,
    rightElement,
    ...restProps
  } = props;
  const inputClasses = cn(
    "rounded p-3 h-10 w-full",
    "font-rubik font-normal text-base text-surface-700 bg-surface-100 placeholder-surface-400",
    "border-2 border-transparent focus:outline-none focus:bg-white",
    "hover:border-surface-200",
    "dark:bg-transparent dark:text-white dark:border-2 dark:border-surface-200 dark:hover:bg-surface-500",
    "dark:focus:border-primary-500 dark:focus:bg-surface-500",
    {
      ["pl-10"]: (leftElement !== undefined),
      ["pr-10"]: (rightElement !== undefined),
      ["border-success-400 bg-white hover:border-success-400"]: (isValid !== null && isValid),
      ["border-error-400 bg-white hover:border-error-400"]: (isValid !== null && !isValid),
      ["focus:ring-primary-200 focus:ring-2 focus:border-primary-500"]: (isValid === null),
      ["bg-surface-100 pointer-events-none"]: disabled
    },
    className
  );

  const maybeRenderLeftElement = () => {
    const classesIcon = cn(
      "left-element",
      "absolute inset-y-0 flex items-center",
      "left-0 pl-3",
      {
        ["text-error-400"]: (isValid !== null && !isValid),
        ["text-success-400"]: (isValid !== null && isValid),
      }
    );
    if(!leftElement) {
      return;
    }
    return (
      <div className={classesIcon}>
        {leftElement}
      </div>
    );
  };

  const maybeRenderRightElement = () => {
    const classesIcon = cn(
      "right-element",
      "absolute inset-y-0 flex items-center",
      "right-0 pr-3",
      {
        ["text-error-400"]: (isValid !== null && !isValid),
        ["text-success-400"]: (isValid !== null && isValid),
      }
    );
    if(!rightElement) {
      return;
    }
    return (
      <div className={classesIcon}>
        {rightElement}
      </div>
    );
  };

  return (
    <div className="input-group relative">
      {maybeRenderLeftElement()}
      <input
        disabled={disabled}
        className={inputClasses}
        ref={ref}
        type={type}
        {...restProps} />
      {maybeRenderRightElement()}
    </div>
  )
})

export default Input;
