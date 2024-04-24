import React from "react";
import Accordion from "../components/Accordion/Accordion"
import mdx from "../components/Accordion/Accordion.mdx"
import cn from "classnames"

export default {
  title: "ORGANISMS/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {
    variant: "outlined",
    className:"flex justify-between border-surface-200"
  },
  argTypes:{
    variant: {
      options: ["outlined" ,"solid"],
      control: { type: "select" },
    },
  }


};

const Template = (args) => {
  return (
    <Accordion>
     <Accordion.Button iconOpen={<span className="font-icons-solid text-lg order-12">expand_less </span>} 
                       iconClosed={<span className="font-icons-solid text-lg order-12">expand_more </span>} {...args}>
       <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
       <div className="flex space-x-2.5 order-last">
         <span className="font-texts">Text</span></div>
     </Accordion.Button>
     <Accordion.Panel>
       Panel
     </Accordion.Panel>
   </Accordion>

  )
};
const Template2 = (args) => {
  return (
    <Accordion>
        <Accordion.Button    iconOpen={<span className="font-icons-solid text-lg order-1 pr-1">expand_less </span>} iconClosed={<span className="font-icons-solid text-lg order-1 pr-1">expand_more </span>} {...args}>
       <div className="flex space-x-2.5  order-2 w-full"> <span className="font-bold font-texts">Title</span></div>
       <div className="flex space-x-2.5 order-last">
         <span className="font-texts">Text</span></div>
     </Accordion.Button>
     
     <Accordion.Panel >
       Panel
     </Accordion.Panel>
   </Accordion>

  )
};

const AccordionExample = Template.bind();
const AccordionColor = Template2.bind();

export { AccordionExample, AccordionColor };