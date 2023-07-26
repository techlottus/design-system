import cn from "classnames";
import { FontsType, HeadingType, VariantsType } from "../Types/Heading.types";
import React from "react";
const fonts: FontsType = {
  principal: cn("font-principal"),
  secondary: cn("font-secondary"),
};
const variants: VariantsType = {
  "h-1": cn("text-4xl md:text-6xl lg:text-7xl font-extrabold"),
  "h-2": cn("text-2xl md:text-4xl lg:text-6xl font-extrabold"),
  "h-3": cn("text-2xl lg:text-5xl md:text-3xl md:font-extrabold font-bold"),
  "h-4": cn("text-2xl md:text-3xl font-bold"),
  "h-5": cn("text-base lg:text-xl font-bold"),
  "h-6": cn("text-base lg:text-lg font-semibold"),
};

const Heading: React.FC<HeadingType> = (props: HeadingType) => {
  const { title, variant = "h-1", font = "principal", className = "" } = props;
  const headingClasses: string = cn(
    className,
    [fonts[font]],
    [variants[variant]]
  );
  return <span className={headingClasses}>{title}</span>;
};

export default Heading;
