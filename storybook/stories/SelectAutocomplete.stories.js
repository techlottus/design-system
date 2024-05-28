import { useState } from "react";
import SelectAutocomplete from "../components/SelectAutocomplete";
import mdx from "../components/SelectAutocomplete/SelectAutocomplete.mdx"
export default {
  title: "MOLECULES/SelectAutocomplete",
  component: SelectAutocomplete,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },
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
    { id: 6, name: 'Durward Reynolds 2' },
    { id: 7, name: 'Kenton Towne 2' },
    { id: 8, name: 'Therese Wunsch 2' },
    { id: 9, name: 'Benedict Kessler 2' },
    { id: 10, name: 'Katelyn Rohan 2' },
    { id: 11, name: 'Durward Reynolds 3' },
    { id: 12, name: 'Kenton Towne 3' },
    { id: 13, name: 'Therese Wunsch 3' },
    { id: 14, name: 'Benedict Kessler 3' },
    { id: 15, name: 'Katelyn Rohan 3' },
    { id: 16, name: 'Durward Reynolds 3' },
    { id: 17, name: 'Kenton Towne 3' },
    { id: 18, name: 'Therese Wunsch 3' },
    { id: 19, name: 'Benedict Kessler 3' },
    { id: 20, name: 'Katelyn Rohan 3' },
  ]
  
  const [selectedPerson, setSelectedPerson] = useState()
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
