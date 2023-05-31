import Heading from "./Heading";
export default {
  title: "Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    title: "Demo Heading",
    type: "h-1",
    variant: "normal",
    font: "principal",
    className: "",
  },
  argTypes: {
    type: {
      options: ["h-1", "h-2", "h-3", "h-4", "h-5", "h-6"],
      control: { type: "select" },
    },
    variant: {
      options: ["normal", "primary", "negative"],
      control: { type: "select" },
    },
    font: {
      options: ["principal", "secondary"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Heading {...args} />;

const Standard = Template.bind({});

export { Standard };
