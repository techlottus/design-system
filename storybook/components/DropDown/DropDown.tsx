import { Menu } from '@headlessui/react'
import { DropDownType, ElementType } from '../Types/DropDown.types'
import cn from "classnames"

const  DropDown:DropDownType = (props:DropDownType )=> {
  const {children,className="",...restprops}=props;

  return (
      <Menu as="div" className={cn(" font-texts text-base w-52 ",className)} {...restprops}>
         {children}     
      </Menu>
  )
}
const  Button = (props:ElementType)=> {
  const {children, className,...restprops}=props;
  return (
      <Menu.Button className={cn("p-1 rounded w-52",className)} {...restprops}>
         {children}     
      </Menu.Button>
  )
}
const  Items = (props:ElementType)=> {
  const {children, className, ...restProps}=props;
  return (
      <Menu.Items  className={cn("p-1 rounded mt-2 left-0 shadow bg-surface-0 z-10  w-52 overflow-y-auto ", className)} {...restProps}>
         {children}     
      </Menu.Items>
  )
}
const  Item = (props:ElementType)=> {
  const {children, className, ...restProps}=props;
  return (
      <Menu.Item as="div" className={cn("p-3 hover:bg-surface-100 font-texts text-base w-full",className)} {...restProps}>
         {children}     
      </Menu.Item>
  )
}

DropDown.Button = Button;
DropDown.Item = Item;
DropDown.Items = Items;

export default DropDown;

