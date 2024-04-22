import { ElementType, TextAreaType } from "../Types/TextArea.types";
import cn from "classnames";

const TextArea: TextAreaType = (props: TextAreaType) => {
  const {
    variant="outlined",
    disabled=false,
    placeholder="",
    children,
    className="",
    ...restProps
  } = props

  return (
    <div>
      <div tabIndex={0} className={cn("flex py-2 pr-2 space-x-2 border focus-within:border-surface-600 rounded",{["bg-surface-100"]:variant==="flat"})}>
        <textarea className={cn("resize-none block w-full text-base overflow-y-auto outline-none",{
         ["bg-surface-100"]: variant === "flat",["pl-2"]:children, ["text-surface-300 pointer-events-none"]:disabled,
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