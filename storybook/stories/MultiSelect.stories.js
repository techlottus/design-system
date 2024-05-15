import React, { useState } from "react";
import Select from "../components/Select";
import mdx from "../components/Select/Select.mdx"
import CheckBoxActive from '../components/CheckBoxActive/CheckBoxActive';
import CheckBoxDefault from '../components/CheckBoxDefault/CheckBoxDefault';
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
    disabled:false,
    error: false,
  },
};


const standar = (args) => {
  const people = [
    { id: 0, name: 'Name', unavailable: true },
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]
  
    const [selectedPerson, setSelectedPerson] = useState([people[0],people[1]])
    const [ActiveOp,setActiveOp]=useState(0)
    const handleSelect = (selectValue)=>{
      if (!selectedPerson.includes(selectValue) ){
        setSelectedPerson(selectValue)
      }

    }
    return (
      <div className="w-80">
       <Select value={selectedPerson} onChange={()=>handleSelect} multiple>
      <Select.Button {...args}>{selectedPerson.map((person) => person.name).join(',')}</Select.Button>
      <Select.Options anchor="bottom">
        {people.map((person) => (
          <Select.Option
           key={person.id} 
           value={person} 
           className="data-[focus]:bg-blue-100"
           disabled={!args.disabled?person.unavailable : args.disabled} >
            <div className="flex space-x-1 align-middle" tabIndex={-1} onClick={()=>{!args.disabled && setActiveOp(person.id)}}>
            {selectedPerson.includes(person.name)?<CheckBoxActive size="sm" className=" cursor-pointer disabled:opacity-75 fill-surface-400" />
                                : <CheckBoxDefault size="sm" className=" cursor-pointer fill-surface-400" />}<span>{person.name}</span> </div>
          </Select.Option>
        ))}
      </Select.Options>
    </Select>
    </div>
    )
  }




const MultiSelect = standar.bind({});


export { MultiSelect };