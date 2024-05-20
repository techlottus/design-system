import React, { useState } from "react";
import Select from "../components/Select";
import mdx from "../components/Select/Select.mdx"
import CheckBoxActive from '../components/CheckBoxActive/CheckBoxActive';
import CheckBoxDefault from '../components/CheckBoxDefault/CheckBoxDefault';
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
    disabled: false,
    error: false,
    placeholder:"Name"
  },
};


const standar = (args) => {
  const people = [
    { id: 1, name: 'Durward Reynolds', disabled: false },
    { id: 2, name: 'Kenton Towne', disabled: false },
    { id: 3, name: 'Therese Wunsch', disabled: false },
    { id: 4, name: 'Benedict Kessler', disabled: true },
    { id: 5, name: 'Katelyn Rohan', disabled: false },
  ]

  const [selectedPerson, setSelectedPerson] = useState([])
  const [ActiveOp, setActiveOp] = useState(0)

  return (
    <div className="w-80">
      <Select value={selectedPerson} onChange={setSelectedPerson} multiple>
        <Select.Button {...args} >{selectedPerson.map((person) => person.name).join(',')}</Select.Button>
        <Select.Options >
          {people.map((person) => (
            <Select.Option
              key={person.id}
              value={person}
              className="data-[focus]:bg-blue-100"
              disabled={!args.disabled ? person.disabled : args.disabled} >

              <div className="flex space-x-1 align-middle" tabIndex={-1} onClick={() => { !args.disabled && setActiveOp(person.id) }}>
                {ActiveOp == person.id ? <CheckBoxActive size="sm" className=" cursor-pointer disabled:opacity-75 fill-surface-400" />
                  : <CheckBoxDefault size="sm" className=" cursor-pointer fill-surface-400" />}
                <span>{person.name}</span>
              </div>
              
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    </div>
  )
}




const MultiSelect = standar.bind({});


export { MultiSelect };