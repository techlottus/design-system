import { Listbox } from '@headlessui/react'
import { ButtonType, OptionType, SelectOptionsType, SelectType } from '../Types/Select.types';
import cn from "classnames"



const Select:SelectType = (props:SelectType)=> {
  const {value,onChange,children,className,...restProps}=props;
  return (
    <Listbox className={className} value={value} onChange={onChange} {...restProps}>
   {children}
    </Listbox>
  )
}

const Button = (props:ButtonType) =>{
  const { children,className,placeholder,disabled=false} =props;
  return (
    <Listbox.Button 
    placeholder={placeholder}
     className={cn("group border  rounded flex  h-10 w-full justify-between align-middle",
     {["focus:border-surface-500 border-surface-200"]:!disabled,
     ["text-surface-200 cursor-none"]:disabled},className)}>
      <div className='py-1.5 px-2 align-middle cursor-text'>{children}</div>
      <span className={cn('order-last font-icons-solid text-lg text-center h-fit p-2 rounded-s-none rounded-e bg-surface-100 border-l',{['group-focus:border-surface-500']:!disabled,['border-surface-200']:disabled})}>
        expand_more
      </span>
    </Listbox.Button>
  )
}

const Options = (props:SelectOptionsType)=> {
  const {children, className="", ...restProps}=props;
  return (
    <Listbox.Options className={cn("rounded w-full shadow overflow-auto",className)} {...restProps}>
   {children}
    </Listbox.Options>
  )
}

const Option = (props:OptionType) =>{
  const {className="", children,disabled=false, as='div',value} =props;
  return (
    <Listbox.Option className={cn("font-texts p-3 hover:bg-surface-100 cursor-default",{["text-surface-200"]:disabled},className)} disabled={disabled} as={as} value={value} >
      {children}
    </Listbox.Option>
  )
}

Select.Button = Button;
Select.Options = Options;
Select.Option = Option;

export default Select;