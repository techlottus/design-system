import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Aspect from "./Aspect";
export default {
  title: "Aspect",
  component: Aspect,
  tags: ["autodocs"],
  args: {
    ratio: "7/2",
  },
};

const Template = (args) => (
  <Aspect {...args}>
    <div className="top-0 left-0 w-full h-full absolute bg-neutral-500">
      <h1>Prueba de aspect</h1>
    </div>
  </Aspect>
);

const Standard = Template.bind({});

export { Standard };
