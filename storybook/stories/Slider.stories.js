import Slider from "../components/Slider";
export default {
  title: "Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    slides: [
      {
        imageUrl:
          "https://st3.depositphotos.com/1010305/16498/i/950/depositphotos_164980550-stock-photo-tiger-in-forest-tiger-in.jpg",
        title: "Conviértete en profesional a tu ritmo",
        content:
          "Aprovecha la flexibilidad de estudiar una carrera profesional a tu propio ritmo y horario. Crea tu futuro con el control en tus manos.",
        button: {
          variant: "primary",
          label: "Conoce más",
          size: "xsm",
          icon: "",
          disabled: false,
        },
        position: "left-middle",
        overlay: "dark",
        contentVariant: "light",
      },
      {
        imageUrl:
          "https://st3.depositphotos.com/1010305/16498/i/950/depositphotos_164980550-stock-photo-tiger-in-forest-tiger-in.jpg",
        title: "Conviértete en profesional a tu ritmo 2",
        content:
          "Aprovecha la flexibilidad de estudiar una carrera profesional a tu propio ritmo y horario. Crea tu futuro con el control en tus manos.",
        button: {
          variant: "primary",
          label: "Conoce más",
          size: "xsm",
          icon: "people",
          disabled: false,
        },
        position: "left-middle",
        overlay: "light",
      },
    ],
  },
};

const Template = (args) => <Slider {...args} />;

const Standard = Template.bind({});

export { Standard };
