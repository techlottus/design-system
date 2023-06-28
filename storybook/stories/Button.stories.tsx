import { Button } from "@lottuseducation/design_system";
import { Meta } from "@storybook/react";
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
} satisfies Meta<typeof Button>;

export const Template = (args: {
  id: string;
  variant: string;
  size: "xsm" | "sm" | "md" | "lg";
  disabled: boolean;
  onClick: () => void;
  className: string;
}) => <Button {...args}>label</Button>;
