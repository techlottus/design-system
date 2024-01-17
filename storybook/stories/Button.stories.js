import React from "react";
import Button  from "../components/Button";
import Icon from "../components/Icon"
/** Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like: Dialogs, Forms, Toolbars, etc. The distinction between buttons and links matters:  */
/** Links are used when you’re navigating to another place or do secondary actions, such as: “view all” page, “Sofía“ profile, etc. */
/** Buttons are used when you are performing an action, such as: “Submit”, “Buy”, “Create new”, etc. */
export default {
  title: "Molecules/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    className: "",
    disabled: false,
    size:  "md",
    variant: "primary",
    onClick: () => {}
  },
  argTypes:{
    size: {
      options: ["xsm" ,"sm" ,"md" ,"lg"],
      control: { type: "select" },
    },
    variant: {
      options: ["primary" , "outlined" , "text" , "outlined-negative"],
      control: { type: "select" },
    },
  }
};

const examples = (args) => (
 <table>
  <thead>
    <tr>
      <td>only label</td>
      <td>Left Icon</td>
      <td>Right Icon</td>
    </tr>
    
  </thead>
  <tbody>
    <tr>
      <td>
        <Button {...args}> <p className="font-principal text-xl font-bold ">Button 1</p></Button>
      </td>
    <td>
      <Button {...args}>
        <span className="flex items-start">Button <Icon iconName="arrow_forward"/></span>
      </Button>
    </td>
    <td>
      <Button {...args}>
        <span className="flex items-start"><Icon iconName="arrow_forward"/> Button </span>
      </Button>
    </td>
    </tr>
  </tbody>
  
  
  </table>
);
const standar = (args) => (
  <Button {...args}>
      <p className="font-principal text-xl font-bold ">Button 1</p>
  </Button>
);

const Standar = standar.bind({});
const Examples = examples.bind({});

export { Standar,Examples };