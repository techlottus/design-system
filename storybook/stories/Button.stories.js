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
 <table className="border border-primary-500 w-full">
  <thead className="bg-primary-400 text-surface-100"> 
    <tr className="font-principal">
      <td>Only label</td>
      <td>Right Icon</td>
      <td>Left Icon</td>
      <td>Only Icon</td>
    </tr>
    
  </thead>
  <tbody>
    <tr className="bg-primary-200">
      <td className="p-2">
        <Button {...args}> <p className="font-principal text-xl font-bold ">Button</p></Button>
      </td>
    <td className="p-2">
      <Button {...args}>
        <span className="flex items-start">Button <Icon iconName="arrow_forward"/></span>
      </Button>
    </td>
    <td className="p-2">
      <Button {...args}>
        <span className="flex items-start"><Icon iconName="arrow_forward"/> Button </span>
      </Button>
    </td>
    <td className="p-2">
      <Button {...args}>
        <Icon iconName="arrow_forward"/>
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