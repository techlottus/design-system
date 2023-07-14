import { Tabs } from "@lottuseducation/design_system";
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
