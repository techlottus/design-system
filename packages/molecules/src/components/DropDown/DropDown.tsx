import { Menu } from '@headlessui/react'
import { DropDownType, ElementType } from '../Types/DropDown.types'
import cn from "classnames"

const  DropDown:DropDownType = (props:DropDownType )=> {
  const {children,className=""}=props;

  return (
      <Menu as="div" className={cn(" font-texts text-base w-52 ",className)}>
         {children}     
      </Menu>
  )
}
const  Button = (props:ElementType)=> {
  const {children}=props;
  return (
      <Menu.Button className="p-1 rounded w-52">
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
  const {children}=props;
  return (
      <Menu.Item as="div" className="p-3 hover:bg-surface-100 font-texts text-base w-full">
         {children}     
      </Menu.Item>
  )
}

DropDown.Button = Button;
DropDown.Item = Item;
DropDown.Items = Items;

export default DropDown;

