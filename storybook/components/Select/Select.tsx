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
  const { children,className,placeholder,disabled=false,error=false} =props;
  return (
    <Listbox.Button 
    placeholder={placeholder}
     className={cn("group border  rounded flex  h-10 w-full justify-between align-middle",
     {["focus:border-surface-500 border-surface-200"]:!disabled && !error,
     ["focus:border-error-500 border-error-500"]:error ,
     ["text-surface-200 cursor-none"]:disabled && !error},className)}>
      <div className={cn('py-1.5 px-2 align-middle cursor-text',{["text-error-500"]:error})}>{children}</div>
      <span className={cn('order-last font-icons-solid text-lg text-center h-fit p-2 rounded-s-none rounded-e border-l',{['group-focus:border-surface-500 bg-surface-100']:!disabled,['border-surface-200 bg-surface-100']:disabled,[" group-focus:border-error-500 border-error-500 bg-error-100"]:error})}>
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