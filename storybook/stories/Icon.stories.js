import Icon from "../components/Icon";
/** Icon component is a helper to use material icons, you can find all the icon names in https://fonts.google.com/icons */
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
