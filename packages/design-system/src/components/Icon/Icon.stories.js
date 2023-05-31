import Icon from "./Icon";
export default {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    iconName: "home",
    className: "",
  },
  argTypes: {
    type: {
      options: ["solid", "outlined"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Icon {...args} />;

const Standard = Template.bind({});

export { Standard };
