import { useState, Fragment } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const Select = ()=> {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
      <Listbox.Options>
        {people.map((person) => (
          /* Use the `active` state to conditionally style the active option. */
          /* Use the `selected` state to conditionally style the selected option. */
          <Listbox.Option key={person.id} value={person} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
                {selected && <span className='font-icons-solid text-lg '>checked</span>}
                {person.name}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
export default Select;