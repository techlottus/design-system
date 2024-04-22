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
      <div className="relative">
        <textarea className={cn("py-3 resize-none block w-full text-base rounded overflow-y-scroll border active:border-surface-950 focus:border-surface-900",{
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
    <div className={cn("absolute top-0 right-0 flex items-center pointer-events-none p-3",className)}>
    {children}
  </div>
);
} 
const LeftElement = ({ children,className }: ElementType) => (
  <div className={cn("absolute top-0 start-0 flex items-center pointer-events-none p-3",className)}>
    {children}
  </div>
);

TextArea.RightElement = RightElement;
TextArea.LeftElement = LeftElement;
export default TextArea;