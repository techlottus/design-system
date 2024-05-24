import React, { useState } from "react";
import Select from "../components/Select";
import mdx from "../components/Select/Select.mdx"
import CheckBoxActive from '../components/CheckBoxActive/CheckBoxActive';
import CheckBoxDefault from '../components/CheckBoxDefault/CheckBoxDefault';
import cn from "classnames"
export default {
  title: "Molecules/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {
    disabled: false,
    error: false,
    label:"Name"
  },
};


const standar = (args) => {
  const people = [
    { id: 1, name: 'Durward Reynolds', disabled: false },
    { id: 2, name: 'Kenton Towne', disabled: false },
    { id: 3, name: 'Therese Wunsch', disabled: false },
    { id: 4, name: 'Benedict Kessler', disabled: true },
    { id: 5, name: 'Katelyn Rohan', disabled: false },
  ]

  const [personList,setPersonList]=useState([])
  const handleClick= (person)=>{
    if(personList.includes(person.name)){
      setPersonList(personList => personList.filter(i=> i!==person.name))}
    else{
      setPersonList(personList=>[...personList,person.name])
    }
  }
  return (
    <div className="w-80">
      <Select multiple>
        <Select.Button {...args} >{personList.length>0?personList.map((person) => person).join(','):args.label}</Select.Button>
        <Select.Options   >
          {people.map((person) => (
            <Select.Option
              key={person.id}
              value={person}
              disabled={!args.disabled ? person.disabled : args.disabled}
              className="group/option"
              onClick={()=>handleClick(person)}>
              <div className={cn("flex space-x-1.5 items-center")}>
                {personList.includes(person.name)?<CheckBoxActive className="fill-surface-400"/>:<CheckBoxDefault className="fill-surface-400"/>}<span>{person.name}</span>
              </div>              
            </Select.Option>
          ))}
        </Select.Options>
      </Select>

    </div>
  )
}

const standarIcon = (args) => {
  const people = [
    { id: 1, name: 'Durward Reynolds', disabled: false },
    { id: 2, name: 'Kenton Towne', disabled: false },
    { id: 3, name: 'Therese Wunsch', disabled: false },
    { id: 4, name: 'Benedict Kessler', disabled: true },
    { id: 5, name: 'Katelyn Rohan', disabled: false },
  ]

  const [personList,setPersonList]=useState([])
  const handleClick= (person)=>{
    if(personList.includes(person.name)){
      setPersonList(personList => personList.filter(i=> i!==person.name))}
    else{
      setPersonList(personList=>[...personList,person.name])
    }
  }
  return (
    <div className="w-80">
      <Select multiple>
        <Select.Button {...args} rightElement={<span className="w-4 font-icons-solid text-surface-400 mr-2">people</span>}>{personList.length>0?personList.map((person) => person).join(','):args.label}</Select.Button>
        <Select.Options   >
          {people.map((person) => (
            <Select.Option
              key={person.id}
              value={person}
              disabled={!args.disabled ? person.disabled : args.disabled}
              className="group/option"
              onClick={()=>handleClick(person)}>
              <div className={cn("flex space-x-1.5 items-center")}>
                {personList.includes(person.name)?<CheckBoxActive className="fill-surface-400"/>:<CheckBoxDefault className="fill-surface-400"/>}<span>{person.name}</span>
              </div>              
            </Select.Option>
          ))}
        </Select.Options>
      </Select>

    </div>
  )
}




const MultiSelect = standar.bind({});
const MultiSelectIcon = standarIcon.bind({});


export { MultiSelect,MultiSelectIcon };