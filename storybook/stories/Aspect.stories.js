import Aspect from "../components/Aspect";
export default {
  title: "Aspect",
  component: Aspect,
  tags: ["autodocs"],
  args: {
    ratio: "7/2",
  },
};

const Template = (args) => (
  <Aspect {...args}>
    <div className="top-0 left-0 w-full h-full absolute bg-neutral-500">
      <h1>Prueba de aspect</h1>
      <span className="font-Icons">home</span>
    </div>
  </Aspect>
);

const Standard = Template.bind({});

export { Standard };
