import React from "react";
import { TextAreaType } from "../Types/TextArea.types";
import cn from "classnames";

const TextArea: React.FC<TextAreaType> = (props: TextAreaType) => {
  const {
    variant,
    textField,
    placeholder,
    children
  } = props

  return (
    <div>
      {
        textField ? 
        <div>
          <p className="text-3">{textField}</p>
        </div>
        : null
      }
      <div className="relative">
        <textarea className={cn("py-3 resize-none block w-full text-base rounded overflow-y-scroll border active:border-surface-950",{
          "px-10": children,
          "px-3": !children,
          "bg-surface-100": variant === "flat"

        })} placeholder={placeholder}>
        </textarea>
        {
          children ?
            <div className="absolute top-0 start-0 flex items-center pointer-events-none p-3">
              {children}
            </div>
            : null
        }
      </div>
    </div>
  );
};
export default TextArea;