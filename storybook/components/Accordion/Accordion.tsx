import { Disclosure } from '@headlessui/react'
import cn from "classnames"
import { AccordionType, ButtonType, ElementType } from '../Types/Accordion.types';
import { useState } from 'react';

const Accordion: AccordionType = (props: AccordionType) => {
  const { children, ...restprops } = props;

  return (
    <Disclosure {...restprops}>
      {children}
    </Disclosure>
  )
}
const Button = (props: ButtonType) => {
  const { children, className, iconOpen, iconClosed, open = null, onClick, ...restprops } = props;
  const [isOpen, setOpen] = useState(false)
  return (
    open==null ? (
    <Disclosure.Button 
    onClick={() => { isOpen ? setOpen(false) : setOpen(true) }} 
    className={cn("p-4 flex space-x-2.5  w-full ", 
              { ["rounded-lg border border-surface-200"]: !isOpen,
               ["rounded-t-lg border-t border-x bg-surface-200 border-surface-200"]: isOpen }, className)}
   {...restprops}>
      {children}
      {isOpen ? iconOpen : iconClosed}
    </Disclosure.Button>) 
    :
     (<Disclosure.Button className={cn("p-4 flex space-x-2.5 w-full", className)} {...restprops}>
      {children}
      {open && iconOpen}
      {!open && iconClosed}
    </Disclosure.Button>)
  )
}
const Panel = (props: ElementType) => {
  const { children, open = false, className, ...restProps } = props;
  return (
    <Disclosure.Panel className={cn("panelGroup p-4 border-surface-200 rounded-b-lg border", className)} {...restProps}>
      {children}
    </Disclosure.Panel>
  )
}

Accordion.Button = Button;
Accordion.Panel = Panel;

export default Accordion;