import cn from "classnames";
import { FontsType, HeadingType, VariantsType } from "../Types/Heading.types";
import React from "react";
const fonts: FontsType = {
  principal: cn("font-headings"),
  secondary: cn("font-texts"),
};
const variants: VariantsType = {
  "h-1": cn("text-4xl tablet:text-6xl desktop:text-7xl font-extrabold"),
  "h-2": cn("text-2xl tablet:text-4xl desktop:text-6xl font-extrabold"),
  "h-3": cn("text-2xl desktop:text-5xl tablet:text-3xl tablet:font-extrabold font-bold"),
  "h-4": cn("text-2xl tablet:text-3xl font-bold"),
  "h-5": cn("text-base desktop:text-xl font-bold"),
  "h-6": cn("text-base desktop:text-lg font-semibold"),
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
