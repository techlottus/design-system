import { Disclosure } from '@headlessui/react'
import cn from "classnames"
import { AccordionType , ElementType} from '../Types/Accordion.types';

const  Accordion:AccordionType = (props:AccordionType )=> {
  const {children,className}=props;

  return (
      <div className={cn({className})}>
         {children}     
      </div>
  )
}
const  Button = (props:ElementType)=> {
  const {children,open=false, className,...restprops}=props;
  return (
      <button  {...restprops}>
        <div className={cn("p-4 flex border-surface-200 w-full ",{["rounded-lg border panelGroup:hidden"]:!open, ["rounded-t-lg border-t border-x bg-surface-200 panelGroup:rounded-b-lg panelGroup:border"]:open})}>
          {children}   
        </div>
      </button>
      
  )
}
const  Panel = (props:ElementType)=> {
  const {children, className}=props;
  return (

         <div className={cn("panelGroup p-4 border-surface-200 rounded-b-lg border-b border-x",className)}>
         {children}    </div> 
  )
}

Accordion.Button = Button;
Accordion.Panel = Panel;

export default Disclosure
;