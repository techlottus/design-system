import BannerContent from "../components/BannerContent";
/** The banner is a space reserved for advertising on a web page, in the form of an image. By clicking on this image, the user is redirected to a web page or landing page. 

It is used within the website in order to take users to another part of the same website and/or to advertise an offer; or it can also appear on a different website, redirecting to the website that advertises the service/product. 

Generally it will be composed of image, text and button (CTA). */
export default {
  title: "MOLECULES/BannerContent",
  component: BannerContent,
  tags: ["autodocs"],
  args: {
    title: "Demo BannerContent",
    content: "content demo",
    contentVariant: "dark",
    button: {
      id: "banner-button",
      label: "button",
      variant: "primary",
      size: "xsm",
    },
    position: "left-top",
    className: "",
    size: "sm",
  },
  args1: {
    title: "Demo BannerContent",
    content: "<li>Example rich text</li>",
    contentVariant: "dark",
    button: {
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
      content: "<li>Example rich text</li>",
      contentVariant: "dark",
      button: {
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
