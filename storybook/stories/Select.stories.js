import React, { useState } from "react";
import Select from "../components/Select";
import mdx from "../components/Select/Select.mdx"
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
    error: false
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
  
    const [selectedPerson, setSelectedPerson] = useState(people[0])
  
    return (
      <div className="w-52">
      <Select value={selectedPerson} onChange={setSelectedPerson} >
        <Select.Button {...args} >{selectedPerson.name}</Select.Button>
        <Select.Options  className="h-40">
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




const Standar = standar.bind({});


export { Standar };