import React from "react";
import cn from "classnames";

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = (props) => {
  const {
    children,
    className,
    fluid = false
  } = props;
  const classes = cn(
    "container px-4",
    {
      ["mx-auto"]: !fluid
    },
    className
  );
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default Container;
