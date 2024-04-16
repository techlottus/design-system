import Badge from "../components/Badge";
/**
 * @todo 
 * Documentation in figma and complete design
 */
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
