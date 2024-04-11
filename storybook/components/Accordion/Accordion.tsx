import { Disclosure } from '@headlessui/react'
import cn from "classnames"
import { AccordionType , ElementType} from '../Types/Accordion.types';

const  Accordion:AccordionType = (props:AccordionType )=> {
  const {children,...restprops}=props;

  return (
      <Disclosure {...restprops}>
         {children}     
      </Disclosure>
  )
}
const  Button = (props:ElementType)=> {
  const {children, className,...restprops}=props;
  return (
      <Disclosure.Button className={cn("",className)} {...restprops}>
         {children}     
      </Disclosure.Button>
  )
}
const  Panel = (props:ElementType)=> {
  const {children, className, ...restProps}=props;
  return (
      <Disclosure.Panel className={cn("",className)} {...restProps}>
         {children}     
      </Disclosure.Panel>
  )
}

Accordion.Button = Button;
Accordion.Panel = Panel;

export default Disclosure
;