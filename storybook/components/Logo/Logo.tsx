import React from "react";
import cn from "classnames";
import { LogoType, SizeType } from "../Types/Logo.types";

const Logo: React.FC<LogoType> = (props: LogoType) => {

  const { className = "", size = "md" } = props

  const Sizes: SizeType = {
    "2xl": cn("h-24 w-96"),
    "xl": cn("h-16 w-80"),
    "lg": cn("h-12 w-56"),
    "md": cn("h-9 w-40"),
    "sm": cn("h-6 w-24"),
    "xs": cn("h-4 w-20"),
  };

  const LogoClasses: string = cn("bg-logo bg-cover bg-center",
    className,
    [Sizes[size]]
  );

  return (
    <div className={LogoClasses}> </div>
  );
};

export default Logo;
