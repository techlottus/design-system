import { Breadcrumb } from "@lottuseducation/design_system";
export default {
  title: "Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  args: {
    homeIcon: { iconName: "home", route: "/home" },
    separatorIcon: "arrow_forward_ios",
    collapseIcon: "more_horiz",
    links: [
      { text: "pageLink1", route: "./pageLink" },
      { text: "pageLink2", route: "./pageLink2" },
      { text: "pageLink2", route: "./pageLink3" },
    ],
    classPageColor: "text-neutral-500",
    collapseMin: 3,
  },
};

const Template = (args) => <Breadcrumb {...args} />;

const Standard = Template.bind({});

export { Standard };
