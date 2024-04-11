import { Disclosure } from '@headlessui/react'
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
      <Disclosure.Button className="p-4 flex border-surface-200 border"{...restprops}>
         {children}     
      </Disclosure.Button>
  )
}
const  Panel = (props:ElementType)=> {
  const {children, className, ...restProps}=props;
  return (
      <Disclosure.Panel className= "p-4 border-surface-200" {...restProps}>
         {children}     
      </Disclosure.Panel>
  )
}

Accordion.Button = Button;
Accordion.Panel = Panel;

export default Disclosure
;