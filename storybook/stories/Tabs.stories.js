import Tabs from "../components/Tabs";
/** The Tab component is used to allow the user to navigate through one or several tabs, which will display information underneath. The component can expand automatically according to the amount of text that is embedded in it.  */

export default {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    tabs: [
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
    ],
  },
};

const Template = (args) => <Tabs {...args} />;

const Standard = Template.bind({});

export { Standard };
