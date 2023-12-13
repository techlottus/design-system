import React from "react";
import { SectionType } from "../Types/Section.types";
import cn from "classnames"

const Section: React.FC<SectionType> = (props: SectionType) => {
  const { children, className = "", imgUrl } = props;


  return (
    <section className={cn(className, `bg-[url('https://img.freepik.com/vector-premium/fondo-linea-fondo-abstracto-hermoso-fondo-bg-patron-diseno-fondo-diapositiva-bg_634868-9.jpg')] bg-cover bg-center`)} >
      {children}
    </section>
  );
};

export default Section;
