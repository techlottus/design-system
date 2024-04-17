import { Disclosure } from '@headlessui/react'
import cn from "classnames"
import { AccordionButtonType, AccordionType , ElementType} from '../Types/Accordion.types';
import { useState } from 'react';


export const  Accordion:AccordionType = (props:AccordionType )=> {
  const {children,...restprops}=props;

  return (
      <Disclosure  {...restprops}>
         {children}     
      </Disclosure>
  )
}
const  Button = (props:AccordionButtonType)=> {
  const {children, className, iconOpen,iconClose,onClick,...restprops}=props;
  const [isOpen,setOpen] =useState(false)
  const handleClick =()=>{
    if(isOpen){
      setOpen(false)
    }
    else {setOpen(true)}
  }
  return (
      <Disclosure.Button  onClick={()=>handleClick} className={cn("p-4 flex space-x-2.5  w-full ",{["rounded-lg border "]:!isOpen, ["rounded-t-lg border-t border-x bg-surface-200 "]: isOpen},className)} {...restprops}>
         {children} 
         {isOpen?iconOpen:iconClose}    
      </Disclosure.Button>
  )
}
const  Panel = (props:ElementType)=> {
  const {children,open=false, className, ...restProps}=props;
  return (
      <Disclosure.Panel  className={cn("group/panel p-4 border-surface-200 rounded-b-lg border",className)} {...restProps}>
         {children}     
      </Disclosure.Panel>
  )
}

Accordion.Button = Button;
Accordion.Panel = Panel;

