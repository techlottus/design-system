import { useState } from "react";
import SelectAutocomplete from "../components/SelectAutocomplete";
export default {
  title: "MOLECULES/SelectAutocomplete",
  component: SelectAutocomplete,
  tags: ["autodocs"],
  args: {
    disabled: false,
    error: false,
    label: "Label"
  },
};

const Template = (args) => {
  const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
  ]
  
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <SelectAutocomplete value={selectedPerson} onChange={setSelectedPerson}>
      <SelectAutocomplete.Input {...args}
        onChange={(event) => setQuery(event.target.value)}
        displayValue={(person) => person.name}
      />
      <SelectAutocomplete.Options>
        {filteredPeople.map((person) => (
          <SelectAutocomplete.Option key={person.id} value={person}  disabled={args.disabled} >
              <li>
                {person.name}
              </li>
          </SelectAutocomplete.Option>
        ))}
      </SelectAutocomplete.Options>
    </SelectAutocomplete>
  )

};

const Select = Template.bind({});

export { Select};
