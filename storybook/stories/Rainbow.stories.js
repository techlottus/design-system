import Rainbow from "../components/Rainbow";
export default {
  title: "ORGANISMS/Rainbow",
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
    background: "bg-outstanding-100",
  },
  argTypes: {
    background: {
      options: [
        "bg-outstanding-100",
        "bg-outstanding-200",
        "bg-outstanding-300",
        "bg-outstanding-400",
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
      background="bg-outstanding-200"
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
      background="bg-outstanding-300"
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
      background="bg-outstanding-400"
    />
  </div>
);

const Standard = Template.bind({});
const RainbowExample = Example.bind({});

export { Standard, RainbowExample };
