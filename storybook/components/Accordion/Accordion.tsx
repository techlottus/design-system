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
  const {children,open=false, className,...restprops}=props;
  return (
      <Disclosure.Button  {...restprops}>
        <div className={cn("p-4 flex border-surface-200 w-full ",{["rounded-lg border"]:!open, ["rounded-t-lg border-t border-x bg-surface-200"]:open})}>
          {children}   
        </div>
           
      </Disclosure.Button>
      
  )
}
const  Panel = (props:ElementType)=> {
  const {children,open=false, className, ...restProps}=props;
  return (

      <Disclosure.Panel  {...restProps}>
         <div className={cn("p-4 border-surface-200 rounded-b-lg border-b border-x",className)}>
         {children}    </div> 
      </Disclosure.Panel>
  )
}

Accordion.Button = Button;
Accordion.Panel = Panel;

export default Disclosure
;