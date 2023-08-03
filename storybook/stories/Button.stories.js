import Button from "../components/Button";
/** Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like: Dialogs, Forms, Toolbars, etc. The distinction between buttons and links matters:

Links are used when you’re navigating to another place or do secondary actions, such as: “view all” page, “Sofía“ profile, etc.
Buttons are used when you are performing an action, such as: “Submit”, “Buy”, “Create new”, etc.
 */
export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Demo Button",
    variant: "primary",
    size: "sm",
    disabled: false,
    iconName: "",
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
};

const Template = (args) => <Button {...args} />;

const Standard = Template.bind({});

export { Standard };
