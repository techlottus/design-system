import React, { useState } from "react";
import DropDown from "../components/DropDown/DropDown"
import Icon from "../components/Icon"
import mdx from "../components/DropDown/DropDown.mdx"


export default {
  title: "MOLECULES/DropDown",
  component: DropDown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },

};

const Template = () =>{ 
  return(
    <DropDown as="div">
    <DropDown.Button>Button</DropDown.Button>
    <DropDown.Items>
     <div className="px-1 py-1 border border-primary-700">
      <DropDown.Item as="div">option</DropDown.Item>
     </div>
    </DropDown.Items>    
    </DropDown>

)}; 
 

const InputStandar = Template.bind();

export { InputStandar};