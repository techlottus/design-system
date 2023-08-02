import TextLink from "../components/TextLink";
export default {
  title: "TextLink",
  component: TextLink,
  tags: ["autodocs"],
  args: {
    text: "Text Link",
    href: "https://cat-bounce.com/",
    target: "_self",
    iconName: "home",
    className: "",
    onClick: () => {
      console.log("function");
    },
    disabled: false,
    items: false,
    active: false,
    iconPosition: "left",
  },
  argTypes: {
    iconPosition: {
      options: ["left", "right"],
      controls: { type: "radio" },
    },
  },
};

const Template = (args) => <TextLink {...args} />;

const Standard = Template.bind({});

export { Standard };
