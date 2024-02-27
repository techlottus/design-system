import React from "react";
import cn from "classnames"
import { IInput } from "../Types/Input.types";

// Types
type InputGroupType = {
  RightElement?: React.FC<ElementType>;
  LeftElement?: React.FC<ElementType>;
  Input?: React.FC<IInput>;
};
type ElementType = { children?: React.ReactNode };


//components
const InputGroup: InputGroupType = ({ children, className }: { children?: React.ReactNode, className: string }) => <div className={cn(" flex space-x-2 border rounded", className)}>{children}</div>;
const RightElement: React.FC<ElementType> = ({ children }: { children?: React.ReactNode }) => (
  <div className="py-3 px-2 flex align-center order-last ">{children}</div>
);
const LeftElement: React.FC<ElementType> = ({ children }: { children?: React.ReactNode }) => (
  <div className="py-3 px-2 flex align-center order-first">{children}</div>
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

  const inputClasses = cn("flex grow peer", "w-full", "border-transparent focus:outline-none", "text-base placeholder-transparent ", className);
  const containerClasses = cn("input-group relative grow flex align-middle peer-focus:my-3 mt-3 mb-1")
  const labelClasses = cn("text-surface-800 text-xs font-texts  absolute scale-75 origin-[0] duration-300 transform -translate-y-2",
    "peer-placeholder-shown:text-surface-300 peer-placeholder-shown:text-base  peer-placeholder-shown:translate-y-1",
    "peer-focus:text-surface-800 peer-focus:text-xs peer-focus:-translate-y-2 ");

  return (
    <div className={containerClasses} >

      <input
        id="input"
        placeholder={label}
        disabled={disabled}
        className={inputClasses}
        ref={ref}
        type={type}
        {...restProps} />

      <label htmlFor="input" className={labelClasses}>{label}</label>
    </div>
  )
});
//exports
InputGroup.RightElement = RightElement;
InputGroup.LeftElement = LeftElement;
InputGroup.Input = Input;

export default InputGroup;