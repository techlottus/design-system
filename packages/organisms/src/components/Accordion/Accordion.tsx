import { Disclosure } from '@headlessui/react'
import cn from "classnames"
import { AccordionType , ElementType} from '../Types/Accordion.types';

const  Accordion:AccordionType = (props:AccordionType )=> {
  const {children,...restprops}=props;

  return (
      <Disclosure  {...restprops}>
         {children}     
      </Disclosure>
  )
}
const  Button = (props:ElementType)=> {
  const {children, className, open=false,...restprops}=props;
  return (
      <Disclosure.Button  className={cn("p-4 flex space-x-2.5  w-full ",{["rounded-lg border"]:!open, ["rounded-t-lg border-t border-x bg-surface-200 "]:open},className)} {...restprops}>
         {children}     
      </Disclosure.Button>
  )
}
const  Panel = (props:ElementType)=> {
  const {children,open=false, className, ...restProps}=props;
  return (
      <Disclosure.Panel  className={cn("panelGroup p-4 border-surface-200 rounded-b-lg border",className)} {...restProps}>
         {children}     
      </Disclosure.Panel>
  )
}

Accordion.Button = Button;
Accordion.Panel = Panel;

export default Accordion
;