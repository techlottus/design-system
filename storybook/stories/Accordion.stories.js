import React, { useState } from "react";
import {Accordion} from "../components/Accordion/Accordion"
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

const Template = () => {
  // const [open, setOpen] = useState(false)
  // const handleOnClick = () => {
  //   if (open) {
  //      setOpen(false) 
  //     }
  //   else setOpen(true)
  //   console.log(open)
  // }
  return (
    <Accordion>
     <Accordion.Button className="flex justify-between border-surface-200" iconOpen={<span className="font-icons-solid text-lg order-12">expand_less </span>} iconClosed={<span className="font-icons-solid text-lg order-12">expand_more </span>}>
       <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
       <div className="flex space-x-2.5 order-last">
         <span className="font-texts">Text</span></div>
     </Accordion.Button>
     <Accordion.Panel>
       Panel
     </Accordion.Panel>
   </Accordion>

  )
};
// const Template2 = () => {
//   return (
//     <div className="flex-col space-y-2">
//       <div>
//         <Accordion>
//           <Accordion.Button className="flex justify-between border-surface-200" iconOpen={<span className="font-icons-solid text-lg order-12">expand_less </span>} iconClosed={<span className="font-icons-solid text-lg order-12">expand_more </span>}>
//             <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
//             <div className="flex space-x-2.5 order-last">
//               <span className="font-texts">Text</span></div>
//           </Accordion.Button>
//           <Accordion.Panel>
//             Panel
//           </Accordion.Panel>
//         </Accordion></div>
//       <div>
//         <Accordion>
//           <Accordion.Button className="flex justify-between" iconOpen={<span className="font-icons-solid text-lg order-12">expand_less </span>} iconClosed={<span className="font-icons-solid text-lg order-12">expand_more </span>}>
//             <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
//             <div className="flex space-x-2.5 order-last">
//               <span className="font-texts">Text</span></div>
//           </Accordion.Button>
//           <Accordion.Panel>
//             Panel
//           </Accordion.Panel>
//         </Accordion></div>
//       <div>
//         <Accordion>
//           <Accordion.Button className="flex justify-between" iconOpen={<span className="font-icons-solid text-lg order-12">expand_less </span>} iconClosed={<span className="font-icons-solid text-lg order-12">expand_more </span>}>
//             <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
//             <div className="flex space-x-2.5 order-last">
//               <span className="font-texts">Text</span></div>
//           </Accordion.Button>
//           <Accordion.Panel>
//             Panel
//           </Accordion.Panel>
//         </Accordion></div>

//     </div>
//   )
// };
// const Template3 = () => {
//   return (
//     <AccordionList>
//       <Accordion.Item>
//         <Accordion.Button className="flex justify-between " >
//           <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
//           <div className="flex space-x-2.5 order-last">
//             <span className="font-texts">Text</span></div>
//         </Accordion.Button>
//         <Accordion.Panel>
//           Panel
//         </Accordion.Panel>
//       </Accordion.Item>
//       <Accordion.Item>
//         <Accordion.Button className="flex justify-between " >
//           <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
//           <div className="flex space-x-2.5 order-last">
//             <span className="font-texts">Text</span></div>
//         </Accordion.Button>
//         <Accordion.Panel>
//           Panel
//         </Accordion.Panel>
//       </Accordion.Item>
//       <Accordion.Item>
//         <Accordion.Button className="flex justify-between " >
//           <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
//           <div className="flex space-x-2.5 order-last">
//             <span className="font-texts">Text</span></div>
//         </Accordion.Button>
//         <Accordion.Panel>
//           Panel
//         </Accordion.Panel>
//       </Accordion.Item>
//     </AccordionList>
//   )
// };

// const Template4 = () =>{ 

//   return(
//     <div className='flex-col space-y-2'> 
//     <div>
//     <Accordion>
//     <Accordion.Button className="flex justify-between border-primary-500" iconOpen={<span className="font-icons-solid text-lg order-12 rounded-full bg-success-500 text-surface-50 w-6 h-6">expand_less </span>} iconClosed={<span className="font-icons-solid text-lg order-12 rounded-full bg-success-500 text-surface-50 w-6 h-6">expand_more </span>} openClasses=" bg-surface-50" closeClasses="bg-surface-10">
//       <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
//       <div className="flex space-x-2.5 order-last">            
//          <span className="font-texts">Text</span></div>
//     </Accordion.Button>
//     <Accordion.Panel>
//     Panel
//   </Accordion.Panel> 
// </Accordion>
//     </div>
//     <div>
//     <Accordion>
//     <Accordion.Button className="flex justify-between border-primary-500" iconOpen={<span className="font-icons-solid text-lg order-12 rounded-full bg-success-500 text-surface-50 w-6 h-6">expand_less </span>} iconClosed={<span className="font-icons-solid text-lg order-12 rounded-full bg-success-500 text-surface-50 w-6 h-6">expand_more </span>} openClasses=" bg-surface-50" closeClasses="bg-surface-10">
//       <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
//       <div className="flex space-x-2.5 order-last">            
//          <span className="font-texts">Text</span></div>
//     </Accordion.Button>
//     <Accordion.Panel>
//     Panel
//   </Accordion.Panel> 
// </Accordion>
//     </div>
//     <div>
//     <Accordion>
//     <Accordion.Button className="flex justify-between border-primary-500" iconOpen={<span className="font-icons-solid text-lg order-12 rounded-full bg-success-500 text-surface-50 w-6 h-6">expand_less </span>} iconClosed={<span className="font-icons-solid text-lg order-12 rounded-full bg-success-500 text-surface-50 w-6 h-6">expand_more </span>} openClasses=" bg-surface-50" closeClasses="bg-surface-10">
//       <div className="flex space-x-2.5  order-1 w-full"><span className="font-icons-outlined text-lg text-surface-300">person</span> <span className="font-bold font-texts">Title</span></div>
//       <div className="flex space-x-2.5 order-last">            
//          <span className="font-texts">Text</span></div>
//     </Accordion.Button>
//     <Accordion.Panel>
//     Panel
//   </Accordion.Panel> 
// </Accordion>
//     </div>


//     </div>

// )}; 

const AccordionExample = Template.bind();
//  const AccordionList = Template2.bind();
//  const AccordionList = Template3.bind();
// const AccordionColorList = Template4.bind();

export { AccordionExample };