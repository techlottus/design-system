import React from "react";
import cn from "classnames";
import { LogoType } from "../Types/Logo.types";
const Logo: React.FC<LogoType> = (props: LogoType) => {
  const { className = "" } = props
  return (
    <div className={cn("w-36 h-9 bg-logo bg-cover bg-center", className)}> </div>
  );
};

export default Logo;
