import Counter from "../components/Counter";
export default {
  title: "Counter",
  component: Counter,
  tags: ["autodocs"],
  args: {
    maxNumber: 76000,
  },
};

const Template = (args) => <Counter {...args} />;
const example = (args) => (
  <div className="flex space-x-6">
    <Counter {...args} />
    <Counter {...args} />
    <Counter {...args} />
    <Counter {...args} />
  </div>
);

const Standard = Template.bind({});
const CounterExample = example.bind({});

export { Standard, CounterExample };
