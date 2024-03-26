import React from "react";
import Container  from "../components/Container";
/**Section is a technical component to apply same classes in all sections used in a page. It can receive all props for a html section */

export default {
  title: "Technical Components/Container",
  component: Container,
  tags: ["autodocs"],
  args: {
    classNames: "border border-primary-500",
  },
};

const Template = (args) => (
  <Container {...args}>
    <div className="">
      <h1>Prueba de container</h1>
    </div>
  </Container>
);

const Standard = Template.bind({});

export { Standard };