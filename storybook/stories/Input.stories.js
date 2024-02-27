import React from "react";
import InputGroup from "../components/Input/Input"
import Icon from "../components/Icon"
import mdx from "../components/Input/Input.mdx"

export default {
  title: "MOLECULES/Input",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args:{
    isValid:null,
    type:"text",
    label:"label"
  },
  argTypes:{
    isValid: {
      options: [true,false],
      control: { type: "boolean" },
    },
    type: {
      options: ["text","email","tel"],
      control: { type: "select" },
    },
  }
};

const Template = (args) => (
  <InputGroup >
    <InputGroup.RightElement>
    <Icon iconName="done" className="text-success-500"/>
    </InputGroup.RightElement>
    <InputGroup.Input {...args} />
    <InputGroup.LeftElement><Icon iconName="people"/></InputGroup.LeftElement>
  </ InputGroup>
);

const InputExample = Template.bind({

});

export { InputExample };