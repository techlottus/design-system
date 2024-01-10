import React from "react";
import Button  from "../components/Button";
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

const Template = (args) => (
  <Button {...args}>
      Button 1
  </Button>
);

const Standard = Template.bind({});

export { Standard };