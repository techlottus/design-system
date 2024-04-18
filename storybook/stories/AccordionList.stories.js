import React, { useState } from "react";
import AccordionList from "../components/Accordion/AccordionList"
import cn from "classnames"

export default {
  title: "ORGANISMS/AccordionList",
  component: AccordionList,
  tags: ["autodocs"],


};

const Template = () => {
  const [clicked, setClicked] = useState(20);

  const handleToggle = (index) => {
    if (clicked === index) {
      setClicked(0);
    }
    setClicked(index);
  };
  return (
    <AccordionList>
      <AccordionList.Item index={0}>
        <AccordionList.Button index={0} open={clicked==0} className="flex justify-between border-primary-500" variant="outlined" onClick={()=>handleToggle(0)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>{(clicked==0)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==0}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item index={1}>
        <AccordionList.Button index={1} open={clicked==1} className="flex justify-between border-primary-500" variant="outlined" onClick={()=>handleToggle(1)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>{(clicked==1)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==1}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item index={2}>
        <AccordionList.Button index={2} open={clicked==2} className="flex justify-between border-primary-500" variant="outlined" onClick={()=>handleToggle(2)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>{(clicked==2)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==2}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>

    </AccordionList>

  )
};
const Template2 = () => {
  const [clicked, setClicked] = useState(20);

  const handleToggle = (index) => {
    if (clicked === index) {
      setClicked(0);
    }
    setClicked(index);
  };
  return (
    <AccordionList>
      <AccordionList.Item index={0}>
        <AccordionList.Button index={0} open={clicked==0} className="flex justify-between " variant="solid" onClick={()=>handleToggle(0)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>{(clicked==0)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==0}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item index={1}>
        <AccordionList.Button index={1} open={clicked==1} className="flex justify-between " variant="solid" onClick={()=>handleToggle(1)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>{(clicked==1)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==1}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>
      <AccordionList.Item index={2}>
        <AccordionList.Button index={2} open={clicked==2} className="flex justify-between " variant="solid" onClick={()=>handleToggle(2)}>
          <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
          <div className="flex space-x-2.5 order-last">
            <span className="font-texts">{Text}</span>{(clicked==2)?<span className="font-icons-solid">expand_less</span>:<span className="font-icons-solid">expand_more</span>}</div>
        </AccordionList.Button>
        <AccordionList.Panel open={clicked==2}>
          Panel
        </AccordionList.Panel>
      </AccordionList.Item>

    </AccordionList>

  )
};


const AccordionExample = Template.bind();
const AccordionExample2 = Template2.bind();

export { AccordionExample, AccordionExample2};