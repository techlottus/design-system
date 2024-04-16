import React from "react";
import Aspect  from "../components/Aspect";
/**Aspect component was created as a solution for class aspect ratio and resolve the problem of keep a scale in different screens sizes. To use Aspect, call the function and assign the prop "ratio" with the scale value (in string type) you want to aply  */
export default {
  title: "Technical Components/Aspect",
  component: Aspect,
  tags: ["autodocs"],
  args: {
    ratio: "7/2",
  },
};

const Template = (args) => (
  <Aspect {...args}>
    <div className="top-0 left-0 w-full h-full absolute bg-surface-500">
      <h1>Prueba de aspect en div de contenido</h1>
    </div>
  </Aspect>
);

const Standard = Template.bind({});

export { Standard };