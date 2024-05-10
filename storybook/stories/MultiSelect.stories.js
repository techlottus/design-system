import React, { useState } from "react";
import Select from "../components/Select";
import mdx from "../components/Select/Select.mdx"
export default {
  title: "Molecules/MultiSelect",
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
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]
  
    const [selectedPerson, setSelectedPerson] = useState(["Name"])
  
    return (
      <div className="w-52">
       <Select value={selectedPerson} onChange={setSelectedPerson} multiple>
      <Select.Button {...args}>{selectedPerson.map((person) => person.name).join(', ')}</Select.Button>
      <Select.Options anchor="bottom">
        {people.map((person) => (
          <Select.Option
           key={person.id} 
           value={person} 
           className="data-[focus]:bg-blue-100"
           disabled={!args.disabled?person.unavailable : args.disabled} >
            {person.name}
          </Select.Option>
        ))}
      </Select.Options>
    </Select>
    </div>
    )
  }




const Standar = standar.bind({});


export { Standar };