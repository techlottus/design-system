import Icon from "../components/Icon";
export default {
  title: "ATOMS/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    iconName: "home",
    className: "",
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
