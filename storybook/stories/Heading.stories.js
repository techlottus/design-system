import Heading from "../components/Heading";
/** Heading is a component for use titles with the correct styles (font family, weight, size) for the different screens */
export default {
  title: "ATOMS/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    variant: "h1",
    className: "bg-primary-300",
    as:""
  },
  argTypes: {
    variant: {
      options: ["h1", "h2","h3","h4","h5","h6"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Heading {...args}>Heading example</Heading>;

const Standard = Template.bind({});

export { Standard };
