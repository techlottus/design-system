import { Disclosure } from '@headlessui/react'
import cn from "classnames"
import { AccordionButtonType, AccordionListType, AccordionType , ElementType} from '../Types/Accordion.types';
import { Children, useState } from 'react';

const AccordionList:AccordionListType = (props:AccordionListType)=>{
  const {children,expandAll=false}= props;
  const [clicked, setClicked] = useState(0);

  const handleToggle = (index: number) => {
    if (clicked === index) {
      setClicked(0);
      return;
    }
    setClicked(index);
  };
  return(
    <div className='p-1 flex-col'>
      <ul>
      {Children.map(children, (child,i) =>
        expandAll ? <li className="" key={i} >
          {child}
        </li>:<li className={cn("group/item",{["clicked"]:i==clicked})} key={i} onClick={()=>handleToggle(i)}>
          {child}
        </li>
      )}
      </ul>
    </div>
  )

}

const  Item = (props:AccordionType )=> {
  const {children,...restprops}=props;

  return (
      <Disclosure  {...restprops}>
         {children}     
      </Disclosure>
  )
}
const  Button = (props:AccordionButtonType)=> {
  const {children, className, open=false,onClick,...restprops}=props;
  return (
      <Disclosure.Button className={cn("p-4 flex space-x-2.5  w-full ","rounded-lg border ", "group-[clicked]/item:rounded-t-lg group-[clicked]/item:border-t group-[clicked]/item:border-x group-[clicked]/item:bg-surface-200 ",className)} {...restprops}>
         {children}     
      </Disclosure.Button>
  )
}
const  Panel = (props:ElementType)=> {
  const {children,open=false, className, ...restProps}=props;
  return (
      <Disclosure.Panel static className={cn("group/panel p-4 border-surface-200 rounded-b-lg border hidden","group-[clicked]/item:block",className)} {...restProps}>
         {children}     
      </Disclosure.Panel>
  )
}

AccordionList.Item = Item;
AccordionList.Button = Button;
AccordionList.Panel = Panel;

export default AccordionList
;