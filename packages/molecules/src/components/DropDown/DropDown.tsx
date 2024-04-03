import { Menu } from '@headlessui/react'
import { DropDownType, ElementType } from '../Types/DropDown.types'
import cn from "classnames"

const  DropDown:DropDownType = (props:DropDownType )=> {
  const {children,className=""}=props;

  return (
      <Menu as="div" className={cn("relative inline-block ",className)}>
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
      <Menu.Items  className="p-1 rounded h-10 scroll">
         {children}     
      </Menu.Items>
  )
}
const  Item = (props:ElementType)=> {
  const {children}=props;
  return (
      <Menu.Item as="div" className="flex p-4 space-x-2.5 hover:bg-primary-200 ">
         {children}     
      </Menu.Item>
  )
}

DropDown.Button = Button;
DropDown.Item = Item;
DropDown.Items = Items;

export default DropDown;

