import React, { useState } from "react";
import AccordionList from "../components/Accordion/AccordionList"
import cn from "classnames"

export default {
  title: "ORGANISMS/AccordionList",
  component: AccordionList,
  tags: ["autodocs"],


};

const Template = () => {
  const [clicked, setClicked] = useState(0);

  const handleToggle = (index) => {
    if (clicked === index) {
      setClicked(0);
    }
    setClicked(index);
  };
  return (
    <AccordionList>
      <AccordionList.Item index={0}>
        <AccordionList.Button index={0} className="flex justify-between border-surface-200" variant="outlined" onClick={()=>handleToggle(0)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">Text</span></div>
        </AccordionList.Button>
        <AccordionList.Panel>
          Panel
        </AccordionList.Panel></AccordionList.Item>
      <AccordionList.Item index={1}>
        <AccordionList.Button index={1} className="flex justify-between border-surface-200" variant="outlined" onClick={()=>handleToggle(1)}>
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