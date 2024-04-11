import React, { useState } from "react";
import Accordion from "../components/Accordion/Accordion"
import Icon from "../components/Icon"
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

};

const Template = () =>{ 
  const [open, setOpen] =useState(false)
  return(
    <Accordion>
    <Accordion.Button open={open} onClick={()=>{open? setOpen(false): setOpen(true)}}  >
      Button
    </Accordion.Button>
    <Accordion.Panel  open={open} >
      Panel
    </Accordion.Panel>    
    </Accordion>

)}; 
// const Template2 = () =>{ 
//   return(
//     <Accordion className="shadow relative">
//     <Accordion.Button>
//     <div className='flex space-x-2.5'><img src='https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' width={'48px'} height={'48px'} /><div className='flex-col space-y-2 justify-start w-full'><div className='flex justify-between'><span className='font-bold font-texts'>Options</span><span className='font-icons-solid text-lg'>expand_more</span></div><div className='flex justify-items-start'><span className='rounded text-success-500 bg-success-100 p-1 text-sm'>Active</span></div></div></div></Accordion.Button>
//     <Accordion.Items className="h-40 absolute ">
//       <Accordion.Item className="flex space-x-2.5" ><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 1</span></Accordion.Item>
//       <Accordion.Item className="flex space-x-2.5" ><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 2</span></Accordion.Item>
//       <Accordion.Item className="flex space-x-2.5" ><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 3</span></Accordion.Item>
//       <Accordion.Item className="flex space-x-2.5" ><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 4</span></Accordion.Item>
//     </Accordion.Items>    
//     </Accordion>

// )}; 
// const Template3 = () =>{ 
//   return(
//     <div className="w-full shadow flex justify-end">
//     <Accordion className="relative">
//     <Accordion.Button>
//     <div className='flex space-x-2.5'><img src='https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' width={'48px'} height={'48px'} /><div className='flex-col space-y-2 justify-start w-full'><div className='flex justify-between'><span className='font-bold font-texts'>Options</span><span className='font-icons-solid text-lg'>expand_more</span></div><div className='flex justify-items-start'><span className='rounded text-success-500 bg-success-100 p-1 text-sm'>Active</span></div></div></div></Accordion.Button>
//     <Accordion.Items className="h-40 absolute">
//       <Accordion.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 1</span></Accordion.Item>
//       <Accordion.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 2</span></Accordion.Item>
//       <Accordion.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 3</span></Accordion.Item>
//       <Accordion.Item className="flex space-x-2.5"><span className='font-icons-solid text-lg'>people</span><span className='font-texts'>Option 4</span></Accordion.Item>
//     </Accordion.Items>    
//     </Accordion>
//     </div>

// )}; 
 
// const Template4 = () =>{ 

//   return(
//     <div className='relative'> <Accordion >
//     <Accordion.Button>
//     <div className='flex space-x-2.5'><img src='https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' width={'48px'} height={'48px'} /><div className='flex-col space-y-2 justify-start w-full'><div className='flex justify-between'><span className='font-bold font-texts'>Options</span><span className='font-icons-solid text-lg'>expand_more</span></div><div className='flex justify-items-start'><span className='rounded text-success-500 bg-success-100 p-1 text-sm'>Active</span></div></div></div></Accordion.Button>
//     <Accordion.Items className="h-40 overflow-y-auto ">
//       <Accordion.Item className="w-fit">
//         <Accordion className="w-fit">
//         <Accordion.Button className="w-fit">NESTED OPTION</Accordion.Button>
//         <Accordion.Items  className="left-56  w-52 overflow-x-visible z-10 absolute mt-0 top-[63px]">
//           <Accordion.Item>ITEM 1</Accordion.Item>
//           <Accordion.Item>ITEM 2</Accordion.Item>
//           <Accordion.Item>ITEM 3</Accordion.Item>
//         </Accordion.Items></Accordion>
//       </Accordion.Item>
//       <Accordion.Item  className="flex space-x-2.5"><span className='font-icons-solid text-lg '>people</span><span className='font-texts'>Option 2</span></Accordion.Item>
//       <Accordion.Item  className="flex space-x-2.5"><span className='font-icons-solid text-lg '>people</span><span className='font-texts'>Option 3</span></Accordion.Item>
//       <Accordion.Item  className="flex space-x-2.5"><span className='font-icons-solid text-lg '>people</span><span className='font-texts'>Option 4</span></Accordion.Item>
//     </Accordion.Items>    
//     </Accordion></div>

// )}; 

const AccordionExample = Template.bind();
// const AccordionImage = Template2.bind();
// const AccordionMenu = Template3.bind();
// const AccordionNested = Template4.bind();

export { AccordionExample};