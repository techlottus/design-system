import { ElementType, TextAreaType } from "../Types/TextArea.types";
import cn from "classnames";

const TextArea: TextAreaType = (props: TextAreaType) => {
  const {
    variant="outlined",
    placeholder="",
    children,
    className="",
    ...restProps
  } = props

  return (
    <div>
      <div tabIndex={0} className="flex p-2 space-x-2.5 border focus-within:border-surface-600 rounded">
        <textarea className={cn("resize-none block w-full text-base overflow-y-auto outline-none",{
         ["bg-surface-100"]: variant === "flat",
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