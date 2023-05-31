import Tabs from "../../portalverse/src/components/Tabs";
export default {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    tabs: [
      { label: "Text Link", active: true, iconName: "home" },
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
