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
  },
  args2: {
    id: "button",
    variant: "primary",
    size: "sm",
    disabled: false,
    onClick: () => {},
    className: "w-full",
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
  },
};

export const Template = (args: any) => <Button {...args}>label</Button>;
