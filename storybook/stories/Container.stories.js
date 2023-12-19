import React from "react";

import Container  from "../components/Container";
export default {
  title: "Technical Components/Container",
  component: Container,
  tags: ["autodocs"],
  args: {
    classNames: "border-primary-500",
  },
};

const Template = (args) => (
  <Container {...args}>
    <div className="">
      <h1>Prueba de aspect</h1>
    </div>
  </Container>
);

const Standard = Template.bind({});

export { Standard };