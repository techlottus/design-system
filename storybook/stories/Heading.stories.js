import { Heading } from "@lottuseducation/design_system";
export default {
  title: "Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    title: "Demo Heading",
    variant: "h-1",
    font: "principal",
    className: "",
  },
  argTypes: {
    variant: {
      options: ["h-1", "h-2", "h-3", "h-4", "h-5", "h-6"],
      control: { type: "select" },
    },
    font: {
      options: ["principal", "secondary"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Heading {...args} />;

const Standard = Template.bind({});

export { Standard };
