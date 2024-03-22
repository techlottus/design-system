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
    regexExp:null,
    variant:"outlined"
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
    variant: {
      options: ["outlined","flat"],
      control: { type: "select" },
    },
  }
};

const Template = (args) =>{ 
  const [name,setName] = useState("");
  const handleSubmit= (e)=> {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      setName(formJson?.inputName)
    }

  return(
  <form onSubmit={handleSubmit} >
<div className="w-full flex space-x-2">
  <Input {...args} name="inputName" >
    <Input.LeftElement>  
      <Icon iconName="person" className="text-surface-300"/>
    </Input.LeftElement>
  </ Input><button type="submit" className="p-2 bg-surface-300">submit</button></div>
   
  
  <span className="my-3 p-3 bg-primary-400 text-lg font-texts w-full flex justify-center"> Hi , {name}</span>
  </form>
  
)}; 
const Template2 = (args) =>{ 
  const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  return(
<div className="w-full flex space-x-2"> 
    <Input  {...args} regexExp={emailRegex}  >
    <Input.LeftElement>  
      <Icon iconName="person" className="text-surface-300"/>
    </Input.LeftElement>
  </ Input></div>
     
)}; 
const Template3 = (args) =>{ 
  const [visible, setVisible] = useState(false)
  return(
<div className="w-full flex space-x-2"> 
    <Input  {...args}  type={"password"} autocomplete="current-password" required="" id="id_password" >
    <Input.LeftElement>  
      <Icon iconName="person" className="text-surface-300"/>
    </Input.LeftElement>
    <Icon IconName="visibility" id="togglePassword" />
  </ Input></div>
     
)}; 

const InputStandar = Template.bind();
const InputValid = Template2.bind();
const InputPasword= Template3.bind();

export { InputStandar , InputValid, InputPasword};