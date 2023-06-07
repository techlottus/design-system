import {Slider} from "@lottuseducation/slider";
export default {
  title: "Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    slides: [
      {
        url: "https://st3.depositphotos.com/1010305/16498/i/950/depositphotos_164980550-stock-photo-tiger-in-forest-tiger-in.jpg",
        title: "Conviértete en profesional a tu ritmo",
        text: "Aprovecha la flexibilidad de estudiar una carrera profesional a tu propio ritmo y horario. Crea tu futuro con el control en tus manos.",
        btn: {
          id: "button",
          type: "primary",
          label: "Conoce más",
          size: "xsm",
          icon: "",
          disabled: false,
          isExpand: false,
        },
        position: "left-middle",
        overlay: "dark",
        contentVariant: "light",
      },
      {
        url: "https://st3.depositphotos.com/1010305/16498/i/950/depositphotos_164980550-stock-photo-tiger-in-forest-tiger-in.jpg",
        title: "Conviértete en profesional a tu ritmo",
        text: "Aprovecha la flexibilidad de estudiar una carrera profesional a tu propio ritmo y horario. Crea tu futuro con el control en tus manos.",
        btn: {
          id: "button",
          type: "primary",
          label: "Conoce más",
          size: "xsm",
          icon: "people",
          disabled: false,
          isExpand: false,
        },
        position: "left-middle",
      },
    ],
  },
};

const Template = (args) => <Slider {...args} />;

const Standard = Template.bind({});

export { Standard };
