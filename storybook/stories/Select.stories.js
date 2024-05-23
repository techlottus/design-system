import React, { useState } from "react";
import Select from "../components/Select";
import mdx from "../components/Select/Select.mdx"
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
    disabled:false,
    error: false,
    label: "Name"
  },
};


const standar = (args) => {
  const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]
  
    const [selectedPerson, setSelectedPerson] = useState({name:"Name"})


    return (
      <div className="w-52">
      <Select value={selectedPerson} 
      onChange={setSelectedPerson}  >
        <Select.Button {...args} ><span className="w-4 font-icons-solid text-surface-400 mr-2">people</span> {selectedPerson.name}</Select.Button>
        <Select.Options  className={cn("h-40")}>
          {people.map((person) => (
            <Select.Option
              key={person.id}
              value={person}
              disabled={!args.disabled?person.unavailable : args.disabled}
            >
              {person.name}
            </Select.Option>
          ))}
        </Select.Options>
      </Select></div>
    )
  }




const SelectList = standar.bind({});


export { SelectList };