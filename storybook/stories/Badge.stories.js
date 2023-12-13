import Badge from "../components/Badge";
/** Heading is a component for use titles with the correct styles (font family, weight, size) for the different screens */
export default {
  title: "ATOMS/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    className: "",
    roundedFull:false,
    content: "Badge example",
    intent:"error"
  },
  argTypes: {
    intent: {
      options: ["error", "warning","success","info",""],
      control: { type: "select" },
    },
    roundedFull: {
      options: [false,true],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Badge {...args}/>;

const Standard = Template.bind({});

export { Standard };
