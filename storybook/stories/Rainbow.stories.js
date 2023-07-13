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
    background: "bg-oustanding-100",
  },
  argTypes: {
    background: {
      options: [
        "bg-oustanding-100",
        "bg-oustanding-200",
        "bg-oustanding-300",
        "bg-oustanding-400",
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
      background="bg-oustanding-100"
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
      background="bg-oustanding-200"
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
      background="bg-oustanding-300"
    />
  </div>
);

const Standard = Template.bind({});
const RainbowExample = Example.bind({});

export { Standard, RainbowExample };
