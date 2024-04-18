import cn from "classnames"
import { AccordionListType , ButtonType, ElementType, ItemType} from '../Types/Accordion.types';

const AccordionList:AccordionListType = (props:AccordionListType)=>{
  const {children}= props;
 
  return(
    <div className='p-1 flex-col'>
      <ul>
        {children}
      </ul>
    </div>
  )

}

const  Item = (props:ItemType )=> {
  const {children,className,index}=props;

  return (
      <li className={cn('p-1',className)} key={index}>
         {children}     
      </li>
  )
}
const  Button = (props: ButtonType)=> {
  const {children, className,variant="solid",index=0, clicked=0,onClick}=props;

  const open= clicked===index
  return (
      <button className={cn("p-4 flex space-x-2.5  w-full ", 
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