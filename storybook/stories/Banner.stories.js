import { Banner } from "@lottuseducation/design_system";
export default {
  title: "Banner",
  component: Banner,
  tags: ["autodocs"],
  args: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Banner",
    content: "Demo Banner",
    desktopRatio: "7/2",
    tabletRatio: "7/2",
    mobileRatio: "4/3",
    overlay: "dark",
    contentVariant: "dark",
    button: {
      label: "button",
    },
    position: "left-top",
    className: "",
  },
  argTypes: {
    size: {
      options: ["lg", "md", "sm"],
      control: { type: "select" },
    },
    contentVariant: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    overlay: {
      options: ["dark", "light", ""],
      control: { type: "radio" },
    },
    position: {
      options: [
        "left-top",
        "left-middle",
        "left-bottom",
        "center-top",
        "center-middle",
        "center-bottom",
        "right-top",
        "right-middle",
        "right-bottom",
      ],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Banner {...args} />;

const Standard = Template.bind({});

export { Standard };
