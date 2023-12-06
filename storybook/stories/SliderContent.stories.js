import SliderContent from "../components/SliderContent";
export default {
  title: "MOLECULES/SliderContent",
  component: SliderContent,
  tags: ["autodocs"],
  args: {
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
    contentVariant: "dark",
  },
};

const Template = (args) => <SliderContent {...args} />;

const Standard = Template.bind({});

export { Standard };
