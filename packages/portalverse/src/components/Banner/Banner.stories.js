import Banner from "./Banner";
export default {
  title: "Banner",
  component: Banner,
  tags: ["autodocs"],
  args: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Banner",
    text: "Demo Banner",
    ratio: "4/3",
    overlay: "dark",
    contentVariant: "dark",
    btn: {
      id: "banner-button",
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
