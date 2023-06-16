import { Rainbow } from "@lottuseducation/design_system";
export default {
  title: "Rainbow",
  component: Rainbow,
  tags: ["autodocs"],
  args: {
    items: [
      {
        imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
        title: "Clases Espejo | Global Classroom",
        description:
          "Sesiones virtuales de 45 a 60 minutos, de temáticas incluidas en los planes de estudio, por carrera, impartidas por profesores de las Universidades con convenio. ",
      },
      {
        imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
        title: "Perfil de ingreso",
        description:
          "Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. ",
      },
      {
        imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
        title: "Perfil de ingreso",
        description:
          "Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. ",
      },
    ],
    backgroundColor: "color1",
  },
  argTypes: {
    backgroundColor: {
      options: [
        "color1",
        "color2",
        "color3",
        "color4",
        "color5",
        "color6",
        "color7",
      ],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Rainbow {...args} />;
const Example = (args) => (
  <div className="flex flex-col">
    <Rainbow {...args} />
    <Rainbow
      items={[
        {
          imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
          title: "Clases Espejo | Global Classroom",
          description:
            "Sesiones virtuales de 45 a 60 minutos, de temáticas incluidas en los planes de estudio, por carrera, impartidas por profesores de las Universidades con convenio. ",
        },
        {
          imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
          title: "Perfil de ingreso",
          description:
            "Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. ",
        },
        {
          imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
          title: "Perfil de ingreso",
          description:
            "Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. ",
        },
      ]}
      backgroundColor="color4"
    />
    <Rainbow
      items={[
        {
          imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
          title: "Clases Espejo | Global Classroom",
          description:
            "Sesiones virtuales de 45 a 60 minutos, de temáticas incluidas en los planes de estudio, por carrera, impartidas por profesores de las Universidades con convenio. ",
        },
        {
          imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
          title: "Perfil de ingreso",
          description:
            "Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. ",
        },
        {
          imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
          title: "Perfil de ingreso",
          description:
            "Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. ",
        },
      ]}
      backgroundColor="color3"
    />
    <Rainbow
      items={[
        {
          imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
          title: "Clases Espejo | Global Classroom",
          description:
            "Sesiones virtuales de 45 a 60 minutos, de temáticas incluidas en los planes de estudio, por carrera, impartidas por profesores de las Universidades con convenio. ",
        },
        {
          imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
          title: "Perfil de ingreso",
          description:
            "Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. ",
        },
        {
          imageUrl: "https://pngimg.com/uploads/crowd/crowd_PNG44.png",
          title: "Perfil de ingreso",
          description:
            "Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. ",
        },
      ]}
      backgroundColor="color2"
    />
  </div>
);

const Standard = Template.bind({});
const RainbowExample = Example.bind({});

export { Standard, RainbowExample };
