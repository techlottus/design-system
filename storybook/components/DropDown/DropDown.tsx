import { Menu } from '@headlessui/react'
import { DropDownType, ElementType } from '../Types/DropDown.types'
import cn from "classnames"

const  DropDown:DropDownType = (props:DropDownType )=> {
  const {children,className=""}=props;

  return (
      <Menu as="div" className={cn("relative inline-block font-texts text-base ",className)}>
         {children}     
      </Menu>
  )
}
const  Button = (props:ElementType)=> {
  const {children}=props;
  return (
      <Menu.Button className="p-1 rounded">
         {children}     
      </Menu.Button>
  )
}
const  Items = (props:ElementType)=> {
  const {children}=props;
  return (
      <Menu.Items  className="p-1 rounded h-50  scroll absolute mt-2 left-0 shadow w-52">
         {children}     
      </Menu.Items>
  )
}
const  Item = (props:ElementType)=> {
  const {children}=props;
  return (
      <Menu.Item as="div" className="flex p-3 space-x-2.5 hover:bg-surface-200 font-texts text-base w-full">
         {children}     
      </Menu.Item>
  )
}

DropDown.Button = Button;
DropDown.Item = Item;
DropDown.Items = Items;

export default DropDown;

