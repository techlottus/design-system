import { Disclosure } from '@headlessui/react'
import cn from "classnames"
import { AccordionType , ButtonType, ElementType} from '../Types/Accordion.types';
import { useState } from 'react';

const  Accordion:AccordionType = (props:AccordionType )=> {
  const {children,...restprops}=props;

  return (
      <Disclosure {...restprops}>
         {children}     
      </Disclosure>
  )
}
const  Button = (props:ButtonType)=> {
  const {children, className,iconOpen, iconClosed,...restprops}=props;
  const [open,setOpen]=useState(false)
  return (
      <Disclosure.Button onClick={()=>{open? setOpen(false): setOpen(true)}} className={cn("p-4 flex space-x-2.5 border-surface-200 w-full ",{["rounded-lg border "]:!open, ["rounded-t-lg border-t border-x "]:open},className)} {...restprops}>
         {children}     
         {open?iconOpen: iconClosed}
      </Disclosure.Button>
  )
}
const  Panel = (props:ElementType)=> {
  const {children,open=false, className, ...restProps}=props;
  return (
      <Disclosure.Panel className={cn("panelGroup p-4 border-surface-200 rounded-b-lg border",className)} {...restProps}>
         {children}     
      </Disclosure.Panel>
  )
}

Accordion.Button = Button;
Accordion.Panel = Panel;

export default Accordion;