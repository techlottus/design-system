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
    <DropDown className="shadow">
    <DropDown.Button>Button</DropDown.Button>
    <DropDown.Items>
      <DropDown.Item >option</DropDown.Item>
      <DropDown.Item >option</DropDown.Item>
      <DropDown.Item >option</DropDown.Item>
    </DropDown.Items>    
    </DropDown>

)}; 
 

const InputStandar = Template.bind();

export { InputStandar};