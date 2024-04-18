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
  const { children, className, iconOpen, iconClosed, variant="solid", ...restprops } = props;
  const [isOpen, setOpen] = useState(false);
  return (
    <Disclosure.Button 
    onClick={() =>  isOpen ? setOpen(false) : setOpen(true)} 
    className={cn("p-4 flex space-x-2.5  w-full ", 
              { ["rounded-lg border border-surface-200"]: (!isOpen) && variant=="solid",
              ["rounded-lg border "]: (!isOpen) && variant=="outlined",
              ["rounded-t-lg border-t border-x "]: (isOpen) && variant=="outlined",
               ["rounded-t-lg border-t border-x bg-surface-200 border-surface-200"]: (isOpen) && variant=="solid",
               }, className)}
   {...restprops}>
      {children}
      {isOpen?  iconOpen:iconClosed }
    </Disclosure.Button>

  )
}
const Panel = (props: ElementType) => {
  const { children, className, ...restProps } = props;
  return (
    <Disclosure.Panel className={cn("panelGroup p-4 border-surface-200 rounded-b-lg border flex", className)} {...restProps}>
      {children}
    </Disclosure.Panel>
  )
}

Accordion.Button = Button;
Accordion.Panel = Panel;

export default Accordion;