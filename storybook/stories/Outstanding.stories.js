import { Outstanding } from "@lottuseducation/design_system";
export default {
  title: "Outstanding",
  component: Outstanding,
  tags: ["autodocs"],
  args: {
    imageUrl:
      "https://www.smatbot.com/blog/wp-content/uploads/2018/02/Hi-Animation-without-background-.gif",
    title: "Perfil de ingreso",
    imagePosition: "right",
    background: "bg-outstanding-100",
    button: {
      id: "cta-outstanding",
      label: "cta2",
      iconName: "home",
      onClick: () => {
        console.log("cta");
      },
    },
    content:
      "Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. ",
  },
  argTypes: {
    imagePosition: {
      options: ["right", "left"],
      control: { type: "select" },
    },
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

const Template = (args) => <Outstanding {...args} />;
const Example = (args) => (
  <div className="flex flex-col">
    <Outstanding {...args} />
    <Outstanding
      imageUrl="https://i.pinimg.com/originals/a9/9c/4c/a99c4cd4909df248ba1fb82b4aaf6491.gif"
      title="Perfil de ingreso"
      imagePosition="left"
      background="bg-outstanding-200"
      content="Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. "
    />
    <Outstanding
      imageUrl="https://4.bp.blogspot.com/-hmXUzTYrZpA/UMC-Yn9eICI/AAAAAAAAF3o/bnVspkeWgJ0/s1600/katt09_jan_2012.gif"
      title="Perfil de ingreso"
      imagePosition="right"
      background="bg-outstanding-300"
      content="Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. "
    />
    <Outstanding
      imageUrl="https://pngimg.com/uploads/crowd/crowd_PNG44.png"
      title="Perfil de ingreso"
      imagePosition="left"
      backgroundColor="color4"
      content="Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. "
    />
  </div>
);

const Standard = Template.bind({});
const OutstandingExample = Example.bind({});

export { Standard, OutstandingExample };
