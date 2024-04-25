import React from "react";
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

  },
  argTypes:{

  }
};


const standar = (args) => {
  const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
  ]
  
    const [selectedPerson, setSelectedPerson] = useState(people[0])
  
    return (
      <Select value={selectedPerson} onChange={setSelectedPerson}>
        <Select.Button>{selectedPerson.name}</Select.Button>
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