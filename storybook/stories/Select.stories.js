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
        <Select.Button {...args} className="peer group"  >  <span className="group-focus:invisible  group-active:invisible visible">{selectedPerson.name}</span></Select.Button>
        <Select.Options static className={cn("h-40 ")}>
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