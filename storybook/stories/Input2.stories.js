import React, { useState } from "react";
import Input from "../components/Input/Input"
import Icon from "../components/Icon"
import mdx from "../components/Input/Input.mdx"


export default {
  title: "MOLECULES/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args:{
    isValid:null,
    type:"text",
    label:"Name",
    disabled:false,
    regexExp:/[^\s@]+@[^\s@]+\.[^\s@]+/
  },
  argTypes:{
    isValid: {
      options: [true,false,null],
      control: { type: "select" },
    },
    type: {
      options: ["text","email","tel"],
      control: { type: "select" },
    },
  }
};


const Template2 = (args) =>{ 
  return(
<div className="w-full flex space-x-2"> 
    <Input  name="inputName" {...args}>
    <Input.LeftElement>  
      <Icon iconName="person" className="text-surface-300"/>
    </Input.LeftElement>
  </ Input></div>
     
)}; 

const InputValid = Template2.bind();

export { InputValid};