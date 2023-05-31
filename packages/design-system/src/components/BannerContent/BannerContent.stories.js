import BannerContent from "./BannerContent";
export default {
  title: "BannerContent",
  component: BannerContent,
  tags: ["autodocs"],
  args: {
    title: "Demo BannerContent",
    text: "content demo",
    contentVariant: "dark",
    btn: {
      id: "banner-button",
      label: "button",
      variant: "primary",
      size: "xsm",
    },
    position: "left-top",
    className: "",
  },
  args1: {
    title: "Demo BannerContent",
    text: "<li>Example rich text</li>",
    contentVariant: "dark",
    btn: {
      id: "banner-button",
      label: "button",
      variant: "primary",
      size: "xsm",
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

const Template = (args) => <BannerContent {...args} />;
const Template2 = (args2) => (
  <BannerContent
    {...{
      title: "Demo BannerContent",
      text: "<li>Example rich text</li>",
      contentVariant: "dark",
      btn: {
        id: "banner-button",
        label: "button",
        variant: "primary",
        size: "xsm",
      },
      position: "left-top",
      className: "",
    }}
  />
);

const Standard = Template.bind({});
const RichTextExample = Template2.bind({});

export { Standard, RichTextExample };
