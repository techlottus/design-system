import LeaderBoard from "../components/LeaderBoard";

/** The LeaderBoard is a space reserved mainly for the closing or division of a page.

It is used within the website in order to take users to another part of the same website and/or to add contacts from the section to the closing of the page.

Generally it will be composed of background image, icons and text. */
export default {
  title: "LeaderBoard",
  component: LeaderBoard,
  tags: ["autodocs"],
  args: {
    imageUrl: "https://wallpapercave.com/wp/wp2951423.png",
    title: "Contacta con el área de Titulación",
    variant: "light",
    links: [
      {
        variant: "phone",
        href: "xxxxxxx",
        text: "8xx-xxx-xx",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        variant: "mail",
        href: "lottusExample@mail.com",
        text: "lottusExample@mail.com",
        icon: { iconName: "mail", type: "solid" },
        target: "_blank",
      },
      {
        variant: "phone",
        href: "xx-xx-xx-xx",
        text: "xxx-xxx-xx-xx",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        variant: "phone",
        href: "8441121234",
        text: "xxx-xxx-xxx-xx",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        variant: "phone",
        href: "8441121234",
        text: "xxx-xxx-xxx-xx",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
    ],
    button: {
      label: "Consultar",
      variant: "outlined-negative",
      size: "xsm",
    },
  },
};
const Template = (args) => <LeaderBoard {...args} />;
const Example = (_) => (
  <div>
    <LeaderBoard
      imageUrl="https://wallpapercave.com/wp/wp2951423.png"
      title="Contacta con el área de Titulación"
      variant="light"
      links={[
        {
          type: "phone",
          value: "xxxxxx",
          text: "xxx-cc-xx-xx",
          icon: { iconName: "phone", type: "solid" },
          target: "_blank",
        },
        {
          type: "mail",
          value: "lottusExample@mail.com",
          text: "lottusExample@mail.com",
          icon: { iconName: "mail", type: "solid" },
          target: "_blank",
        },
        {
          type: "phone",
          value: "xxxxxxx",
          text: "xxx-cc-xx-xx",
          icon: { iconName: "phone", type: "solid" },
          target: "_blank",
        },
        {
          type: "phone",
          value: "xxxxxxx",
          text: "xxx-cc-xx-xx",
          icon: { iconName: "phone", type: "solid" },
          target: "_blank",
        },
        {
          type: "phone",
          value: "xxxxxxx",
          text: "xxx-cc-xx-xx",
          icon: { iconName: "phone", type: "solid" },
          target: "_blank",
        },
      ]}
    />
  </div>
);

const Standard = Template.bind({});
const noButton = Example.bind({});

export { Standard, noButton };
