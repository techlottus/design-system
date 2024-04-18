import React, { useState, useTransition } from "react";
import AccordionList from "../components/Accordion/AccordionList"
import mdx from "../components/Accordion/Accordion.mdx"
import cn from "classnames"

export default {
  title: "ORGANISMS/AccordionList",
  component: AccordionList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {
    variant: "outlined",
  },
  argTypes:{
    variant: {
      options: ["outlined" ,"solid" ],
      control: { type: "select" },
    },
  }

};

const Template = (args) => {
  return (
    <AccordionList>
      <AccordionList.Item>
     <AccordionList.Button index={0} className="flex justify-between border-surface-200" variant="outlined">
       <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
       <div className="flex space-x-2.5 order-last">
         <span className="font-texts">Text</span></div>
     </AccordionList.Button>
     <AccordionList.Panel>
       Panel
     </AccordionList.Panel></AccordionList.Item>
      <AccordionList.Item>
     <AccordionList.Button index={1} className="flex justify-between border-surface-200" variant="outlined">
       <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
       <div className="flex space-x-2.5 order-last">
         <span className="font-texts">Text</span></div>
     </AccordionList.Button>
     <AccordionList.Panel>
       Panel
     </AccordionList.Panel></AccordionList.Item>
   </AccordionList>

  )
};


const AccordionExample = Template.bind();

export { AccordionExample };