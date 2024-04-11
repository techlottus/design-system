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
  const {children, className,iconOpen=<span className="font-icons-solid text-lg order-12">expand_less </span>, iconClosed=<span className="font-icons-solid text-lg order-12">expand_more </span>, openClasses=" bg-surface-200", closedClasses="",...restprops}=props;
  const [open,setOpen]=useState(false)
  return (
      <Disclosure.Button onClick={()=>{open? setOpen(false): setOpen(true)}} className={cn("p-4 flex space-x-2.5 border-surface-200 w-full ",{["rounded-lg border "+closedClasses]:!open, ["rounded-t-lg border-t border-x "+openClasses]:open},className)} {...restprops}>
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

export default Accordion
;