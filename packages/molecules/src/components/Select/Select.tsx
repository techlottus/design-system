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
  const { children,className,placeholder} =props;
  return (
    <Listbox.Button placeholder={placeholder} className={cn("px-3 py-2.5 border border-surface-300 rounded flex",className)}>{children}<span className='order-last font-icons-solid text-lg text-center p-2 rounded-s-none rounded-e bg-surface-300'>expand_more</span></Listbox.Button>
  )
}

const Options = (props:SelectOptionsType)=> {
  const {children, className="", ...restProps}=props;
  return (
    <Listbox.Options className={className} {...restProps}>
   {children}
    </Listbox.Options>
  )
}

const Option = (props:OptionType) =>{
  const {className="", children,disabled=false, as='div',value} =props;
  return (
    <Listbox.Option className={className} disabled={disabled} as={as} value={value} >
      {children}
    </Listbox.Option>
  )
}

Select.Button = Button;
Select.Options = Options;
Select.Option = Option;

export default Select;