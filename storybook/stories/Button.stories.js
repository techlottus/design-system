import React from "react";
import Button  from "../components/Button";
/**Button component was created as a solution for class aspect ratio and resolve the problem of keep a scale in different screens sizes. To use Button, call the function and assign the prop "ratio" with the scale value (in string type) you want to aply  */
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