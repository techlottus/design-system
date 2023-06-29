import { Icon } from "@lottuseducation/design_system";
export default {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    iconName: "home",
    className: "",
    variant: "solid",
  },
  argTypes: {
    variant: {
      options: ["solid", "outlined"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Icon {...args} />;

const Standard = Template.bind({});

export { Standard };
