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
    variant:"outlined",
    hideIcons:false
  },
  argTypes:{
    isValid: {
      options: [true,false,null],
      control: { type: "select" },
    },
    type: {
      options: ["text","email","tel","password"],
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
<div className="w-full flex-col space-y-2"> 

  <span><h3>Input con patrón de correo electrónico</h3></span>
    <Input  disabled={args.disabled} regexExp={emailRegex} label="Email"  type= "text" variant={args.variant} hideIcons={args.hideIcons}>
    <Input.LeftElement>  
      <Icon iconName="person" className="text-surface-300 flex-start"/>
    </Input.LeftElement>
  </ Input></div>
     
)}; 
const Template3 = () =>{ 
  const [visible, setVisible] = useState("password");
  const handleClick = ()=>{
    if (visible=="password"){
      setVisible("text")
    }
    else setVisible("password")
  }
  return(
<div className="w-full flex space-x-2"> 
    <Input   type={visible} autocomplete="current-password" required="" label={visible} >
    <Input.LeftElement>  
      <Icon iconName="person" className="text-surface-300"/>
    </Input.LeftElement>
    <Input.RightElement><button type="button" onClick={()=>handleClick} className="z-3 focus:border">
      {visible=="password" && <Icon iconName="visibility_off" className="text-surface-300 password-toggle-icon"/>}
      {visible=="text" && <Icon iconName="visibility" className="text-surface-300 password-toggle-icon"/>}
      </button></Input.RightElement>
  </ Input></div>
     
)}; 

const InputStandar = Template.bind();
const EmailExample = Template2.bind();
const InputPasword= Template3.bind();

export { InputStandar , EmailExample, InputPasword};