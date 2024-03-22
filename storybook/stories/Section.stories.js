import React from "react";
import Section  from "../components/Section";

/**Section is a technical component to apply same classes in all sections used in a page. It can receive all props for a html section */
export default {
  title: "Technical Components/Section",
  component: Section,
  tags: ["autodocs"],
  args: {
    className: "bg-[url('https://img.freepik.com/vector-premium/fondo-linea-fondo-abstracto-hermoso-fondo-bg-patron-diseno-fondo-diapositiva-bg_634868-9.jpg')]",
    id:"section"
  },
};

const Template = (args) => (
  <Section {...args}>
    <div className="w-full h-full ">
      <h1>Prueba de section</h1>
      <h1>con fondo de imagen</h1>
    </div>
  </Section>
);

const Standard = Template.bind({});

export { Standard };