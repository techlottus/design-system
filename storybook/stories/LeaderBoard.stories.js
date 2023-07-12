import { LeaderBoard } from "@lottuseducation/design_system";
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
        ext: "xxxxxxx",
        text: "8xx-xxx-xx",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        variant: "mail",
        ext: "lottusExample@mail.com",
        text: "lottusExample@mail.com",
        icon: { iconName: "mail", type: "solid" },
        target: "_blank",
      },
      {
        variant: "phone",
        ext: "xx-xx-xx-xx",
        text: "xxx-xxx-xx-xx",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        variant: "phone",
        ext: "8441121234",
        text: "xxx-xxx-xxx-xx",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        variant: "phone",
        ext: "8441121234",
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
          variant: "phone",
          ext: "xxxxxx",
          text: "xxx-cc-xx-xx",
          icon: { iconName: "phone", type: "solid" },
          target: "_blank",
        },
        {
          variant: "mail",
          ext: "lottusExample@mail.com",
          text: "lottusExample@mail.com",
          icon: { iconName: "mail", type: "solid" },
          target: "_blank",
        },
        {
          variant: "phone",
          ext: "xxxxxxx",
          text: "xxx-cc-xx-xx",
          icon: { iconName: "phone", type: "solid" },
          target: "_blank",
        },
        {
          variant: "phone",
          ext: "xxxxxxx",
          text: "xxx-cc-xx-xx",
          icon: { iconName: "phone", type: "solid" },
          target: "_blank",
        },
        {
          variant: "phone",
          ext: "xxxxxxx",
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
