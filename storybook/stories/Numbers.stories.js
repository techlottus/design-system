import { Numbers } from "@lottuseducation/numbers";
export default {
  title: "Numbers",
  component: Numbers,
  tags: ["autodocs"],
  args: {
    number: 12000,
    title: "Numbers",
    iconName: "people",
    description: "Numbers component",
    variant: "",
  },
  argTypes: {
    variant: {
      options: ["", "stroke", "shadow"],
      control: { type: "radio" },
    },
    theme: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    color: {
      options: [
        "neutral-100",
        "neutral-200",
        "neutral-300",
        "neutral-400",
        "neutral-500",
        "neutral-600",
        "neutral-700",
        "neutral-800",
        "neutral-900",
        "primary-100",
        "primary-200",
        "primary-300",
        "primary-400",
        "primary-500",
        "primary-600",
        "primary-700",
        "primary-800",
        "primary-900",
      ],
      control: { type: "select" },
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
