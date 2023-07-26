import Banner from "../components/Banner";

/** The banner is a space reserved for advertising on a web page, in the form of an image. By clicking on this image, the user is redirected to a web page or landing page. 

It is used within the website in order to take users to another part of the same website and/or to advertise an offer; or it can also appear on a different website, redirecting to the website that advertises the service/product. 

Generally it will be composed of image, text and button (CTA). */
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
    contentVariant: "light",
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
