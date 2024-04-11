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
    <DropDown className="shadow relative">
    <DropDown.Button><div className='flex justify-between p-3 w-52'><span className='font-bold font-texts'>Options</span><span className='font-icons-solid text-lg'>expand_more</span></div></DropDown.Button>
    <DropDown.Items className="h-40 absolute ">
      <DropDown.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 1</span></DropDown.Item>
      <DropDown.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 2</span></DropDown.Item>
      <DropDown.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 3</span></DropDown.Item>
      <DropDown.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 4</span></DropDown.Item>
    </DropDown.Items>    
    </DropDown>

)}; 
const Template2 = () =>{ 
  return(
    <DropDown className="shadow relative">
    <DropDown.Button>
    <div className='flex space-x-2.5'><img src='https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' width={'48px'} height={'48px'} /><div className='flex-col space-y-2 justify-start w-full'><div className='flex justify-between'><span className='font-bold font-texts'>Options</span><span className='font-icons-solid text-lg'>expand_more</span></div><div className='flex justify-items-start'><span className='rounded text-success-500 bg-success-100 p-1 text-sm'>Active</span></div></div></div></DropDown.Button>
    <DropDown.Items className="h-40 absolute ">
      <DropDown.Item className="flex space-x-2.5" ><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 1</span></DropDown.Item>
      <DropDown.Item className="flex space-x-2.5" ><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 2</span></DropDown.Item>
      <DropDown.Item className="flex space-x-2.5" ><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 3</span></DropDown.Item>
      <DropDown.Item className="flex space-x-2.5" ><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 4</span></DropDown.Item>
    </DropDown.Items>    
    </DropDown>

)}; 
const Template3 = () =>{ 
  return(
    <div className="w-full shadow flex justify-end">
    <DropDown className="relative">
    <DropDown.Button>
    <div className='flex space-x-2.5'><img src='https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' width={'48px'} height={'48px'} /><div className='flex-col space-y-2 justify-start w-full'><div className='flex justify-between'><span className='font-bold font-texts'>Options</span><span className='font-icons-solid text-lg'>expand_more</span></div><div className='flex justify-items-start'><span className='rounded text-success-500 bg-success-100 p-1 text-sm'>Active</span></div></div></div></DropDown.Button>
    <DropDown.Items className="h-40 absolute">
      <DropDown.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 1</span></DropDown.Item>
      <DropDown.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 2</span></DropDown.Item>
      <DropDown.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 3</span></DropDown.Item>
      <DropDown.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 4</span></DropDown.Item>
    </DropDown.Items>    
    </DropDown>
    </div>

)}; 
 
const Template4 = () =>{ 
  const [open,setOpen]=useState(false)
  const handleclick = () =>{
    if (open){
      setOpen(false)
    }
    else {
      setOpen(true)
    }

  }
  return(
    <DropDown >
    <DropDown.Button>
    <div className='flex space-x-2.5'><img src='https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' width={'48px'} height={'48px'} /><div className='flex-col space-y-2 justify-start w-full'><div className='flex justify-between'><span className='font-bold font-texts'>Options</span><span className='font-icons-solid text-lg'>expand_more</span></div><div className='flex justify-items-start'><span className='rounded text-success-500 bg-success-100 p-1 text-sm'>Active</span></div></div></div></DropDown.Button>
    <DropDown.Items className="h-40 overflow-y-auto">
      <DropDown.Item >
        {/* <button className="peer w-full">Nested</button>
        <div className="peer-hover:visible invisible left-52 mt-2 w-52 p-12 overflow-x-visible z-10 absolute">
          Items
        </div>         */}
        <DropDown>
        <DropDown.Button className="w-52">NESTED OPTION</DropDown.Button>
        <DropDown.Items  className="left-54  w-52 overflow-x-visible z-10 absolute">
          <DropDown.Item>ITEM 1</DropDown.Item>
          <DropDown.Item>ITEM 2</DropDown.Item>
          <DropDown.Item>ITEM 3</DropDown.Item>
        </DropDown.Items></DropDown>
      </DropDown.Item>
      <DropDown.Item  className="flex space-x-2.5"><span className='font-icons-solid text-lg '>people</span><span className='font-texts'>Option 2</span></DropDown.Item>
      <DropDown.Item  className="flex space-x-2.5"><span className='font-icons-solid text-lg '>people</span><span className='font-texts'>Option 3</span></DropDown.Item>
      <DropDown.Item  className="flex space-x-2.5"><span className='font-icons-solid text-lg '>people</span><span className='font-texts'>Option 4</span></DropDown.Item>
    </DropDown.Items>    
    </DropDown>

)}; 

const DropDownText = Template.bind();
const DropDownImage = Template2.bind();
const DropDownMenu = Template3.bind();
const DropDownNested = Template4.bind();

export { DropDownText,DropDownImage, DropDownMenu,DropDownNested};