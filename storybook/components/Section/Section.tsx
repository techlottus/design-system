import React from "react";
import { SectionType } from "../Types/Section.types";
import cn from "classnames"

const Section: React.FC<SectionType> = (props: SectionType) => {
  const { children, className = "" } = props;


  return (
    <section className={cn("w-full m-4 p-4", className)} >
      {children}
    </section>
  );
};

export default Section;
