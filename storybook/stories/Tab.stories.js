import Tab from "../components/Tab";
/** The Tab component is used to allow the user to navigate through one or several tabs, which will display information underneath. The component can expand automatically according to the amount of text that is embedded in it.  */
export default {
  title: "Tab",
  component: Tab,
  tags: ["autodocs"],
  args: {
    label: "Text Link",
    active: true,
    iconName: "home",
    isFirst: true,
    className: "",
  },
};

const Template = (args) => <Tab {...args} />;
const Tabs = () => (
  <div className="flex flex-row ">
    <Tab label="label1" active={true} className="rounded-full py-0 3" />
  </div>
);

const Standard = Template.bind({});
const TabsExample = Tabs.bind({});

export { Standard, TabsExample };
