import { Button } from "@lottuseducation/design_system";
export default {
  title: "Button",
  tags: ["autodocs"],
  args: {
    id: "button",
    variant: "primary",
    size: "sm",
    disabled: false,
    onClick: () => {},
    className: "",
    type: "button",
  },
  argTypes: {
    variant: {
      options: ["primary", "outlined", "text", "outlined-negative"],
      control: { type: "select" },
    },
    size: {
      options: ["xsm", "sm", "md", "lg"],
      control: { type: "select" },
    },
    type: {
      options: ["button", "submit", "reset"],
      control: { type: "select" },
    },
  },
};

export const Template = (args) => <Button {...args}>label</Button>;
