import React from "react";
import Select from "../components/Select";
import mdx from "../components/Select/Select.mdx"
export default {
  title: "Molecules/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {

  },
  argTypes:{

  }
};


const standar = (args) => (
  <Select {...args}></Select>
);



const Standar = standar.bind({});


export { Standar };