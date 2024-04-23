import React from "react";
import TextArea from "../components/TextArea";
import mdx from "../components/TextArea/TextArea.mdx"
export default {
  title: "Molecules/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {
    placeholder: "Placeholder",
    variant: "outline",
    disabled:false
  },
  argTypes:{
    variant: {
      options: ["outline", "flat"],
      control: { type: "select" },
    },
  }
};


const standar = (args) => (
  <TextArea {...args}></TextArea>
);
const ChildrensExample = (args) => (
  <TextArea {...args}><TextArea.RightElement><span className="font-icons-solid text-surface-300 text-lg h-6 w-6 text-center">favorite</span></TextArea.RightElement>
  <TextArea.LeftElement><span className="font-icons-solid text-surface-300 text-lg h-6 w-6 text-center">people</span></TextArea.LeftElement>
  </TextArea>
);
const ErrorExample = (args) => (
  <div className="flex-col">
  <TextArea error  {...args}><TextArea.RightElement><span className="font-icons-solid text-surface-300 text-lg h-6 w-6 text-center">favorite</span></TextArea.RightElement>
  <TextArea.LeftElement><span className="font-icons-solid text-surface-300 text-lg h-6 w-6 text-center">people</span></TextArea.LeftElement>
  </TextArea>
  <div className="flex justify-between animate-pulse"><span className="font-text text-error-500">Error text help</span> <span className="font-text text-surface-400">0/100</span></div>
</div>
);



const Standar = standar.bind({});
const ExampleElements = ChildrensExample.bind({});
const ExampleError = ErrorExample.bind({});

export { Standar , ExampleElements, ExampleError};