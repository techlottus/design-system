import React from "react";
import cn from "classnames";
import { LogoType, SizeType } from "../Types/Logo.types";

const Logo: React.FC<LogoType> = (props: LogoType) => {

  const { className = "", size = "md" } = props

  const Sizes: SizeType = {
    "2xl": cn("h-24"),
    "xl": cn("h-18"),
    "lg": cn("h-12"),
    "md": cn("h-9"),
    "sm": cn("h-6"),
    "xs": cn("h-4"),
  };

  const LogoClasses: string = cn("bg-logo bg-cover bg-center w-fit",
    className,
    [Sizes[size]]
  );

  return (
    <div className={LogoClasses}> </div>
  );
};

export default Logo;
