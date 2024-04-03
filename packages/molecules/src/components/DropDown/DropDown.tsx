import { Menu } from '@headlessui/react'
import { DropDownType, ElementType } from '../Types/DropDown.types'

const  DropDown:DropDownType = (props:ElementType )=> {
  const {children}=props;

  return (
      <Menu as="div" className="relative inline-block bg-primary-500">
         {children}     
      </Menu>
  )
}
const  Button = (props:ElementType)=> {
  const {children}=props;
  return (
      <Menu.Button className="border-2">
         {children}     
      </Menu.Button>
  )
}
const  Items = (props:ElementType)=> {
  const {children}=props;
  return (
      <Menu.Items  className="bg-surface-100">
         {children}     
      </Menu.Items>
  )
}
const  Item = (props:ElementType)=> {
  const {children}=props;
  return (
      <Menu.Item>
         {children}     
      </Menu.Item>
  )
}

DropDown.Button = Button;
DropDown.Items = Items;
DropDown.Item = Item;

export default DropDown;

