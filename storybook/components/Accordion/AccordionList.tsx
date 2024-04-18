import cn from "classnames"
import { AccordionListType , ButtonType, ElementType, ItemType} from '../Types/Accordion.types';

const AccordionList:AccordionListType = (props:AccordionListType)=>{
  const {children}= props;
 
  return(
    <div className='flex-col mobile:h-10 '>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  )

}

const  Item = (props:ItemType )=> {
  const {children,className,index}=props;

  return (
      <li className={cn('',className)} key={index}>
         {children}     
      </li>
  )
}
const  Button = (props: ButtonType)=> {
  const {children, className,variant="solid",open=false,onClick}=props;

  return (
      <button className={cn("mobile:px-4 mobile:py-2 p-4 flex space-x-2.5  w-full ", 
      { ["rounded-lg border border-surface-200"]: (!open) && variant=="solid",
      ["rounded-lg border "]: (!open) && variant=="outlined",
      ["rounded-t-lg border-t border-x "]: (open) && variant=="outlined",
       ["rounded-t-lg border-t border-x bg-surface-200 border-surface-200"]: (open) && variant=="solid",
       }, className)}
       onClick={onClick}>
         {children}     
      </button>
  )
}
const  Panel = (props:ElementType)=> {
  const {children,open=false, className}=props;
  return (
      <div  className={cn("group/panel p-4 border-surface-200 rounded-b-lg border ",{["hidden"]:!open},className)}>
         {children}     
      </div>
  )
}

AccordionList.Item = Item;
AccordionList.Button = Button;
AccordionList.Panel = Panel;

export default AccordionList;