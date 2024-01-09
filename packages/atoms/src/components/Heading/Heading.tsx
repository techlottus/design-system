import cn from "classnames";
import { HeadingType, VariantsType } from "../Types/Heading.types";
import React, { ElementType } from "react";

const variants: VariantsType = {
  "h1": cn("text-3xl tablet:text-7xl desktop:text-8xl font-bold"),
  "h2": cn("text-2xl tablet:text-5xl desktop:text-7xl font-bold"),
  "h3": cn("text-2xl tablet:text-4xl desktop:text-6xl font-bold"),
  "h4": cn("text-2xl tablet:text-3xl desktop:text-4xl font-semibold"),
  "h5": cn("text-lg font-semibold"),
  "h6": cn("text-sm tablet:text-lg font-semibold"),
};

const Heading: React.FC<HeadingType> = (props: HeadingType) => {
  const { variant = "h1", className = "", children } = props;
  const Tag = (props.as || variant) as ElementType
  const headingClasses: string = cn("font-headings",
    className,
    [variants[variant]]
  );

  return <Tag className={headingClasses}>{children}</Tag>
};

export default Heading;
