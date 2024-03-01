import React from "react";
import cn from "classnames"
import { ElementType, IInput, InputContainerType, InputGroupType } from "../Types/Input.types";

//components
const InputGroup: InputGroupType = (props: InputContainerType) => {
  const { children, className, isValid=null,disabled=false} = props;
  return (
    <div tabIndex={0} className={cn("flex border rounded h-10 input-group grow align-middle",
    {["border-surface-200 focus-within:border-surface-600"]:isValid==null,
    ["border-success-500 focus-within:border-success-500"]:isValid,
    ["border-error-500 focus-within:border-error-500"]:!isValid,},{["border-surface-200 focus-within:border-surface-200"]:disabled}, className)} >
      {children}
    </div>);
}

const RightElement: React.FC<ElementType> = ({ children,className }: ElementType) => (
  <div className={cn("py-3 pr-3 pl-2 flex align-center justify-center order-last ",className)}>{children}</div>
);
const LeftElement: React.FC<ElementType> = ({ children,className }: ElementType) => (
  <div className={cn("py-3 pl-3 pr-2 flex align-center justify-center order-first",className)}>{children}</div>
);

const Input = React.forwardRef((props: IInput, ref: React.Ref<HTMLInputElement>) => {
  const {
    isValid = null,
    disabled = false,
    type = "text",
    style,
    label,
    className,
    ...restProps
  } = props;

  const inputClasses = cn("flex order-2 grow peer", "w-full", "border-transparent focus:outline-none pt-3 px-1", "text-base placeholder-transparent ", className);
  const labelClasses = cn("order-2 text-xs font-texts  absolute scale-75 origin-center duration-300 transform -translate-y-8 ",
    "peer-placeholder-shown:text-base peer-placeholder-shown:text-surface-700 peer-placeholder-shown:-translate-y-5 ",
    "peer-focus:text-xs peer-focus:-translate-y-8 ",{["text-surface-800  peer-focus:text-surface-800"]:isValid==null,["text-success-500  peer-focus:text-success-500"]:isValid,["text-error-500  peer-focus:text-error-500"]:!isValid},{["text-surface-200  peer-placeholder-shown:text-surface-300"]:disabled});

  return (
<div tabIndex={0} className="w-full input-group">
      <input
        id="input"
        placeholder={label}
        disabled={disabled}
        className={inputClasses}
        ref={ref}
        type={type}
        {...restProps} />

      <label htmlFor="input" className={labelClasses}>{label}</label></div>
  )
});



InputGroup.RightElement = RightElement;
InputGroup.LeftElement = LeftElement;
InputGroup.Input = Input;

export default InputGroup;