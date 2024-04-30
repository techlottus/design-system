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
  
    const [selectedPerson, setSelectedPerson] = useState(people[0])
  
    return (
      <Select value={selectedPerson} onChange={setSelectedPerson}>
        <Select.Button placeholder="Label">{selectedPerson.name}</Select.Button>
        <Select.Options>
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