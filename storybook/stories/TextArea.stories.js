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
    variant: "outlined",
    disabled:false
  },
  argTypes:{
    variant: {
      options: ["outlined", "flat"],
      control: { type: "select" },
    },
  }
};

// const examples = (args) => (
//   <table className="border border-primary-500 w-full">
//     <thead className="bg-primary-400 text-surface-100">
//       <tr className="font-principal  font-bold">
//         <td className="pl-2">Only placeholder</td>
//         <td className="pl-2">Flat variant</td>
//         <td className="pl-2">Placeholder and children</td>
//         <td className="pl-2">TextField</td>
//       </tr>

//     </thead>
//     <tbody>
//       <tr className="">
//         <td className="p-2">
//           <TextArea {...args}></TextArea>
//         </td>
//         <td className="p-2">
//           <TextArea {...args} variant="flat"></TextArea>
//         </td>
//         <td className="p-2">
//           <TextArea {...args}>
//             <p className="material-icons">person</p>
//           </TextArea>
//         </td>
//         <td className="p-2">
//           <TextArea {...args} textField="textField">
//             <p className="material-icons">person</p>
//           </TextArea>
//         </td>
//       </tr>
//     </tbody>


//   </table>
// );
const standar = (args) => (
  <TextArea {...args}></TextArea>
);

const Standar = standar.bind({});
// const Examples = examples.bind({});

export { Standar };