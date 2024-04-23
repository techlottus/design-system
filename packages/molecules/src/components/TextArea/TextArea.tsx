import { ElementType, TextAreaType } from "../Types/TextArea.types";
import cn from "classnames";

const TextArea: TextAreaType = (props: TextAreaType) => {
  const {
    variant="outline",
    disabled=false,
    placeholder="",
    children,
    error=false,
    className="",
    ...restProps
  } = props

  return (
    <div>
      <div tabIndex={0} className={cn("flex py-2 pr-2 space-x-2",{["border rounded"]:variant==="outline",["border-b-error-500 focus-within:border-b-error-500 rounded-b-none"]:error,["border-b rounded-t bg-surface-100"]:variant==="flat",["px-2"]:!children,["focus-within:border-x-surface-600 focus-within:border-t-surface-600 "]:!disabled && error,["focus-within:border-surface-600 "]:!disabled && !error})}>
        <textarea className={cn("resize-none block w-full text-base overflow-y-auto outline-none placeholder:text-surface-700",{
         ["bg-surface-100"]: variant === "flat",["pl-2"]:children, ["text-surface-300 pointer-events-none placeholder:text-surface-300"]:disabled,
        })} placeholder={placeholder} {...restProps}>
        </textarea>
        {children}
      </div>
    </div>
  );
};

const RightElement= (props: ElementType) =>{
  const { children,className } = props;
  return(
    <div className={cn(" flex justify-center pointer-events-none order-last",className)}>
    {children}
  </div>
);
} 
const LeftElement= (props: ElementType) =>{
  const { children,className } = props;
  return(
    <div className={cn(" flex justify-center pointer-events-none order-first",className)}>
    {children}
  </div>
);
} 

TextArea.RightElement = RightElement;
TextArea.LeftElement = LeftElement;
export default TextArea;