import React, { Children } from "react";
import type { ReactNode, FC } from "react";
import Input from "../Input";
import cn from "classnames";

type DecorationProps = {
  children: React.ReactNode;
  className?: string;
  position?: Position;
}

type InputGroupComposition = {
  Decoration: React.FC<DecorationProps>
}

type InputGroupProps = {
  children: ReactNode;
  className?: string;
}

const Positions = {
  left: cn("left-0 pl-3"),
  right: cn("right-0 pr-3"),
};

type Position = keyof typeof Positions

const Decoration: React.FC<DecorationProps> = (props) => {
  const {
    className,
    children,
    position = "left"
  } = props;
  
  const decorationClasses = cn(
    "absolute inset-y-0 flex items-center",
    Positions[position],
    className
  );
  return (
    <div className={decorationClasses}>{children}</div>
  )
}

const InputGroup: FC<InputGroupProps> & InputGroupComposition = (props) => {
  const {
    children,
    className,
  } = props;
  const inputGroupClasses = cn(
    "input-group",
    "relative",
    className,
  );
  return (
    <div className={inputGroupClasses}>
      {
        Children.map(children, (child) => {
          if(React.isValidElement(child) && (child.type === Decoration || child.type === Input)) {
            return child;
          }
          return;
        })
      }
    </div>
  );
}

InputGroup.Decoration = Decoration;

export default InputGroup;
