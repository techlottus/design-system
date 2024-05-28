import { Combobox } from '@headlessui/react'
import { InputType, optionType, optionsType, selectAutoTypes } from '../Types/SelectAutocomplete.types'
import cn from "classnames"


const SelectAutocomplete: selectAutoTypes= (props:selectAutoTypes) =>{
  const {value,onChange,children}=props
  return (
    <Combobox value={value} onChange={onChange} >
     {children}
    </Combobox>
  )
}


const Input = (props:InputType) =>{
  const { className,disabled=false,error=false,onChange=()=>{},label="",rightElement=<></>,displayValue=""} =props;

  return (

    <div
     className={cn("group border  rounded flex  h-10 w-full justify-between align-middle font-texts ",
     {["focus:border-surface-500 border-surface-200 text-surface-700"]:!disabled && !error,
     ["focus:border-error-500 border-error-500"]:error ,
     ["text-surface-200 cursor-none"]:disabled && !error},className)}>

      <div className={cn('py-1.5 px-2 align-middle h-full cursor-none overflow-hidden truncate font-texts ',{["text-error-500"]:error})}>
        <div className='flex'>
          {rightElement}
          <Combobox.Input onChange={onChange} placeholder={label} displayValue={displayValue}/>

          </div>
         </div>
      <span className={cn('order-last font-icons-solid text-lg text-center h-full p-2 rounded-s-none rounded-e border-l cursor-pointer ',{['group-focus:border-surface-500 bg-surface-100']:!disabled && !error,['border-surface-200 bg-surface-200 text-surface-900 opacity-50']:disabled && !error,[" group-focus:border-error-500 border-error-500 bg-error-100 "]:error})}>
        expand_more
      </span>
    </div>
  )
}

const Options = (props:optionsType)=> {
  const {children, className="" , ...restProps}=props;
  return (
    <Combobox.Options className={cn("rounded w-full shadow overflow-auto font-texts p-0 my-0",className)} {...restProps}>
   {children}
    </Combobox.Options>
  )
}

const Option = (props:optionType) =>{
  const {className="", children,disabled=false, as='div',value,key=""} =props;
  return (
    <Combobox.Option key={key}  className={cn("font-texts p-3 hover:bg-surface-100 cursor-default",{["text-surface-200"]:disabled,["text-surface-700"]:!disabled},className)} disabled={disabled} as={as} value={value} >
      {children}
    </Combobox.Option>
  )
}

SelectAutocomplete.Input = Input;
SelectAutocomplete.Options = Options;
SelectAutocomplete.Option = Option;

 

export default SelectAutocomplete;