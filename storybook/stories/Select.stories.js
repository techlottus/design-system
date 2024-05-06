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
};


const standar = () => {
  const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]
  
    const [selectedPerson, setSelectedPerson] = useState("Name")
  
    return (
      <Select value={selectedPerson} onChange={setSelectedPerson}>
        <Select.Button className="w-10">{selectedPerson.name}</Select.Button>
        <Select.Options className="w-10">
          {people.map((person) => (
            <Select.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
            >
              {person.name}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    )
  }




const Standar = standar.bind({});


export { Standar };