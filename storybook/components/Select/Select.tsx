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
  const { children,className,disabled=false,error=false,onClick=()=>{},label=""} =props;

  return (

    <Listbox.Button onClick={onClick}
     className={cn("group border  rounded flex  h-10 w-full justify-between align-middle font-texts ",
     {["focus:border-surface-500 border-surface-200 text-surface-700"]:!disabled && !error,
     ["focus:border-error-500 border-error-500"]:error ,
     ["text-surface-200 cursor-none"]:disabled && !error},className)}>
       
      <div className={cn('py-1.5 px-2 align-middle h-full cursor-none overflow-hidden truncate font-texts ',{["text-error-500"]:error})}><span className=" group-aria-expanded:flex  hidden">{label}</span> <span className="group-active:hidden group-aria-expanded:hidden flex">{children}</span></div>
      <span className={cn('order-last font-icons-solid text-lg text-center h-full p-2 rounded-s-none rounded-e border-l cursor-pointer ',{['group-focus:border-surface-500 bg-surface-100']:!disabled && !error,['border-surface-200 bg-surface-200 text-surface-900 opacity-50']:disabled && !error,[" group-focus:border-error-500 border-error-500 bg-error-100 "]:error})}>
        expand_more
      </span>
    </Listbox.Button>
  )
}

const Options = (props:SelectOptionsType)=> {
  const {children, className="", ...restProps}=props;
  return (
    <Listbox.Options className={cn("rounded w-full shadow overflow-auto font-texts p-0 my-0",className)} {...restProps}>
   {children}
    </Listbox.Options>
  )
}

const Option = (props:OptionType) =>{
  const {className="", children,disabled=false, as='div',value} =props;
  return (
    <Listbox.Option className={cn("font-texts p-3 hover:bg-surface-100 cursor-default",{["text-surface-200"]:disabled,["text-surface-700"]:!disabled},className)} disabled={disabled} as={as} value={value} >
      {children}
    </Listbox.Option>
  )
}

Select.Button = Button;
Select.Options = Options;
Select.Option = Option;

export default Select;