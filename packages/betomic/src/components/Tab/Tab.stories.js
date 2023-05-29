import Tab from "./Tab";
export default {
  title: "Tab",
  component: Tab,
  tags: ["autodocs"],
  args: {
    label: "Text Link",
    active: true,
    iconName: "home",
    isFirst: true,
  },
};

const Template = (args) => <Tab {...args} />;
const Tabs = (args) => (
  <div className="flex flex-row ">
    <Tab label="label1" active={false} isFirst />
    <Tab {...args} />
    <Tab label="label2" active={false} />
    <Tab label="label3" active={false} />
  </div>
);

const Standard = Template.bind({});
const TabsExample = Tabs.bind({});

export { Standard, TabsExample };
