import Numbers from "../components/Numbers";
export default {
  title: "Numbers",
  component: Numbers,
  tags: ["autodocs"],
  args: {
    number: 12000,
    title: "Numbers",
    iconName: "people",
    description: "Numbers component",
    variant: "shadow",
    border: "border-neutral-700 shadow-neutral-700",
  },
  argTypes: {
    variant: {
      options: ["", "stroke", "shadow"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Numbers {...args} />;
const example = (args) => (
  <div className="flex space-x-6">
    <Numbers {...args} />
    <Numbers {...args} />
    <Numbers {...args} />
    <Numbers {...args} />
  </div>
);

const Standard = Template.bind({});
const NumbersExample = example.bind({});

export { Standard, NumbersExample };
