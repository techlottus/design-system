import SliderContent from "../../design-system/src/components/SliderContent";
export default {
  title: "SliderContent",
  component: SliderContent,
  tags: ["autodocs"],
  args: {
    title: "Demo SliderContent",
    text: "Demo SliderContent",
    btn: {
      id: "banner-button",
      label: "button",
      type: "primary",
      size: "xsm",
    },
    position: "left-top",
    contentVariant: "dark",
    className: "",
  },
  argTypes: {
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
    contentVariant: {
      options: ["dark", "light"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <SliderContent {...args} />;

const Standard = Template.bind({});

export { Standard };
