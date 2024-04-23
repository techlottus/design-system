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
    disabled:false,
    error:false
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
  <div className="flex justify-between text-sm"><span className="font-text text-error-500">Error text help</span> <span className="font-text text-surface-400">0/100</span></div>
</div>
);
const TextFieldExample = (args) => (
  <div className="flex-col">
  <div className="flex justify-between"><span className="font-text text-surface-700">Text field description</span> <span className="font-icons-solid w-6 h-6 rounded-full bg-surface-500 text-surface-50">question_mark</span></div>
  <TextArea error  {...args}><TextArea.RightElement><span className="font-icons-solid text-surface-300 text-lg h-6 w-6 text-center">favorite</span></TextArea.RightElement>
  <TextArea.LeftElement><span className="font-icons-solid text-surface-300 text-lg h-6 w-6 text-center">people</span></TextArea.LeftElement>
  </TextArea>
  <div className="flex justify-between text-sm"><span className="font-text text-error-500">Text help</span> <span className="font-text text-surface-400">0/100</span></div>
</div>
);



const Standar = standar.bind({});
const ExampleElements = ChildrensExample.bind({});
const ExampleError = ErrorExample.bind({});
const ExampleTextField = TextFieldExample.bind({});

export { Standar , ExampleElements, ExampleError, ExampleTextField};