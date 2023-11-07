import cn from "classnames";
import { FontsType, HeadingType, VariantsType } from "../Types/Heading.types";
import React from "react";
const fonts: FontsType = {
  principal: cn("font-Nunito"),
  secondary: cn("font-Poppins"),
};
const variants: VariantsType = {
  "h-1": cn("text-4xl w-t:text-6xl w-d:text-7xl font-extrabold"),
  "h-2": cn("text-2xl w-t:text-4xl w-d:text-6xl font-extrabold"),
  "h-3": cn("text-2xl w-d:text-5xl w-t:text-3xl w-t:font-extrabold font-bold"),
  "h-4": cn("text-2xl w-t:text-3xl font-bold"),
  "h-5": cn("text-base w-d:text-xl font-bold"),
  "h-6": cn("text-base w-d:text-lg font-semibold"),
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
