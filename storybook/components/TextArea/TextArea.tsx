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
      <div className=" flex space-x-2.5 rounded py-2.5 pl-3 pr-2 border has-[:active]:border-surface-600 has-[:focus]:border-surface-600">
     
        <textarea className={cn(" resize-none block w-full text-base  overflow-y-scroll  order-2",{
          "bg-surface-100": variant === "flat"
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
    <div className={cn(" flex items-center pointer-events-none p-3 order-first",className)}>
    {children}
  </div>
);
} 
const LeftElement= (props: ElementType) =>{
  const { children,className } = props;
  return(
    <div className={cn(" flex items-center pointer-events-none p-3 order-last",className)}>
    {children}
  </div>
);
} 

TextArea.RightElement = RightElement;
TextArea.LeftElement = LeftElement;
export default TextArea;