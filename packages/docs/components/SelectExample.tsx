import React, { Fragment, useState } from "react";
import { Listbox } from "@headlessui/react";
import { CalendarIcon, CheckIcon, CaretDownIcon, HelperIcon } from "@exponentialeducation/iconography";
import { FormGroup } from "@exponentialeducation/betomic/src";
import cn from "classnames";

const items = [
  { id: 1, name: "Item 1", unavailable: false },
  { id: 2, name: "Item 2", unavailable: false },
  { id: 3, name: "Item 3", unavailable: false },
  { id: 4, name: "Item 4", unavailable: true },
];

const SelectBasicExample = () => {

  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="text-center">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <Listbox.Button>{selectedItem.name} <small className="text-surface-500">Click me</small></Listbox.Button>
        <Listbox.Options>
          {items.map((item) => (
            <Listbox.Option
              key={item.id}
              value={item}
              disabled={item.unavailable}
            >
              {item.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

const SelectCustomExample = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex justify-center">
      <div className="w-80">
        <Listbox value={selectedItem} onChange={setSelectedItem}>
          {({ open }) => (
            <div className="relative">
              <Listbox.Button
                className={cn(
                  "relative w-full flex justify-between items-center gap-3 bg-surface-100 px-3 py-2",
                  "font-rubik text-base text-surface-600 leading-6 rounded border-2 border-transparent",
                  "h-10 hover:border-surface-200 focus:outline-none focus:border focus:border-primary-500",
                  "focus:ring-2 focus:ring-primary-200", {
                  ["bg-surface-100"]: !selectedItem,
                  ["bg-white border-surface-200"]: selectedItem,
                  ["border border-primary-500 ring-2 ring-primary-200 hover:border-primary-500"]: open
                }
                )}
              >
                <span className="block truncate">
                  {selectedItem ? selectedItem.name : "Seleccionar"}
                </span>
                <span className="w-5">
                  <CaretDownIcon className="w-5 h-5" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="ml-0 absolute w-full mt-1 overflow-auto text-base bg-white rounded shadow max-h-52 focus:outline-none">
                {items.map((item) => (
                  /* Use the `active` state to conditionally style the active option. */
                  /* Use the `selected` state to conditionally style the selected option. */
                  <Listbox.Option key={item.id} value={item} as={Fragment}>
                    {({ active, selected }) => (
                      <li
                        className={cn(
                          "flex justify-between items-center p-4 m-0 h-12",
                          "font-rubik text-base text-surface-600 leading-6",
                          "rounded cursor-default select-none", {
                          ["bg-surface-50"]: active,
                          ["font-bold text-primary-500"]: selected
                        }
                        )}
                      >
                        <span className="block truncate">
                          {item.name}
                        </span>
                        {
                          selected &&
                          <span className="flex items-center w-4 pointer-events-none">
                            <CheckIcon className="w-4 h-4" />
                          </span>
                        }
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          )}
        </Listbox>
      </div>
    </div>
  );
}

const SelectStandardExample = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex justify-center">

      <div className="w-80">
        <FormGroup
          label="Label"
          labelFor="select-standard"
          required
        >
          <Listbox value={selectedItem} onChange={setSelectedItem}>
            {({ open }) => (
              <div className="relative">
                <Listbox.Button
                  id="select-standard"
                  className={cn(
                    "relative w-full flex justify-between items-center gap-3 bg-surface-100 px-3 py-2",
                    "font-rubik text-base text-surface-600 leading-6 rounded border-2 border-transparent",
                    "h-10 hover:border-surface-200 focus:outline-none focus:border focus:border-primary-500",
                    "focus:ring-2 focus:ring-primary-200", {
                    ["bg-surface-100"]: !selectedItem,
                    ["bg-white border-surface-200"]: selectedItem,
                    ["border border-primary-500 ring-2 ring-primary-200 hover:border-primary-500"]: open
                  }
                  )}
                >
                  <span className="block truncate">
                    {selectedItem ? selectedItem.name : "Seleccionar"}
                  </span>
                  <span className="w-5">
                    <CaretDownIcon className="w-5 h-5" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="ml-0 absolute w-full mt-1 overflow-auto text-base bg-white rounded shadow max-h-52 focus:outline-none">
                  {items.map((item) => (
                    /* Use the `active` state to conditionally style the active option. */
                    /* Use the `selected` state to conditionally style the selected option. */
                    <Listbox.Option key={item.id} value={item} as={Fragment}>
                      {({ active, selected }) => (
                        <li
                          className={cn(
                            "flex justify-between items-center p-4 m-0 h-12",
                            "font-rubik text-base text-surface-600 leading-6",
                            "rounded cursor-default select-none", {
                            ["bg-surface-50"]: active,
                            ["font-bold text-primary-500"]: selected
                          }
                          )}
                        >
                          <span className="block truncate">
                            {item.name}
                          </span>
                          {
                            selected &&
                            <span className="flex items-center w-4 pointer-events-none">
                              <CheckIcon className="w-4 h-4" />
                            </span>
                          }
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            )}
          </Listbox>
        </FormGroup>
      </div>
    </div>
  );
}

const SelectStandardLabelExample = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex justify-center">

      <div className="w-80">
        <Listbox value={selectedItem} onChange={setSelectedItem}>
          {({ open }) => (
            <div className="relative">
              <Listbox.Label
                className="font-normal font-rubik text-base text-surface-600 mb-1 leading-7"
              >
                Label
                <span
                  className={cn("pl-1  font-normal", {
                    ["text-error-300"]: true
                  })}
                >
                  *
                </span>
              </Listbox.Label>
              <Listbox.Button
                className={cn(
                  "relative w-full flex justify-between items-center gap-3 bg-surface-100 px-3 py-2",
                  "font-rubik text-base text-surface-600 leading-6 rounded border-2 border-transparent",
                  "h-10 hover:border-surface-200 focus:outline-none focus:border focus:border-primary-500",
                  "focus:ring-2 focus:ring-primary-200", {
                  ["bg-surface-100"]: !selectedItem,
                  ["bg-white border-surface-200"]: selectedItem,
                  ["border border-primary-500 ring-2 ring-primary-200 hover:border-primary-500"]: open
                }
                )}
              >
                <span className="block truncate">
                  {selectedItem ? selectedItem.name : "Seleccionar"}
                </span>
                <span className="w-5">
                  <CaretDownIcon className="w-5 h-5" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="ml-0 absolute w-full mt-1 overflow-auto text-base bg-white rounded shadow max-h-52 focus:outline-none">
                {items.map((item) => (
                  /* Use the `active` state to conditionally style the active option. */
                  /* Use the `selected` state to conditionally style the selected option. */
                  <Listbox.Option key={item.id} value={item} as={Fragment}>
                    {({ active, selected }) => (
                      <li
                        className={cn(
                          "flex justify-between items-center p-4 m-0 h-12",
                          "font-rubik text-base text-surface-600 leading-6",
                          "rounded cursor-default select-none", {
                          ["bg-surface-50"]: active,
                          ["font-bold text-primary-500"]: selected
                        }
                        )}
                      >
                        <span className="block truncate">
                          {item.name}
                        </span>
                        {
                          selected &&
                          <span className="flex items-center w-4 pointer-events-none">
                            <CheckIcon className="w-4 h-4" />
                          </span>
                        }
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          )}
        </Listbox>
      </div>
    </div>
  );
}

const SelectLeadIconExample = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex justify-center">

      <div className="w-80">
        <Listbox value={selectedItem} onChange={setSelectedItem}>
          {({ open }) => (
            <div className="relative">
              <Listbox.Label
                className="flex items-center font-normal font-rubik text-base text-surface-600 mb-1 leading-7"
              >
                <CalendarIcon className="text-primary-500 w-5 h-5 mr-1" />
                <span>
                  Label
                </span>
                <span
                  className={cn("pl-1  font-normal", {
                    ["text-error-300"]: true
                  })}
                >
                  *
                </span>
              </Listbox.Label>
              <Listbox.Button
                className={cn(
                  "relative w-full flex justify-between items-center gap-3 bg-surface-100 px-3 py-2",
                  "font-rubik text-base text-surface-600 leading-6 rounded border-2 border-transparent",
                  "h-10 hover:border-surface-200 focus:outline-none focus:border focus:border-primary-500",
                  "focus:ring-2 focus:ring-primary-200", {
                  ["bg-surface-100"]: !selectedItem,
                  ["bg-white border-surface-200"]: selectedItem,
                  ["border border-primary-500 ring-2 ring-primary-200 hover:border-primary-500"]: open
                }
                )}
              >
                <span className="block truncate">
                  {selectedItem ? selectedItem.name : "Seleccionar"}
                </span>
                <span className="w-5">
                  <CaretDownIcon className="w-5 h-5" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="ml-0 absolute w-full mt-1 overflow-auto text-base bg-white rounded shadow max-h-52 focus:outline-none">
                {items.map((item) => (
                  /* Use the `active` state to conditionally style the active option. */
                  /* Use the `selected` state to conditionally style the selected option. */
                  <Listbox.Option key={item.id} value={item} as={Fragment}>
                    {({ active, selected }) => (
                      <li
                        className={cn(
                          "flex justify-between items-center p-4 m-0 h-12",
                          "font-rubik text-base text-surface-600 leading-6",
                          "rounded cursor-default select-none", {
                          ["bg-surface-50"]: active,
                          ["font-bold text-primary-500"]: selected
                        }
                        )}
                      >
                        <span className="block truncate">
                          {item.name}
                        </span>
                        {
                          selected &&
                          <span className="flex items-center w-4 pointer-events-none">
                            <CheckIcon className="w-4 h-4" />
                          </span>
                        }
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          )}
        </Listbox>
      </div>
    </div>
  );
}

const SelectHelperIconExample = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex justify-center">
      <div className="w-80">
        <FormGroup
          label="Label"
          labelFor="select-standard"
          required
          rightElement={
            <HelperIcon className="w-4" />
          }
        >
          <Listbox value={selectedItem} onChange={setSelectedItem}>
            {({ open }) => (
              <div className="relative">
                <Listbox.Button
                  id="select-standard"
                  className={cn(
                    "relative w-full flex justify-between items-center gap-3 bg-surface-100 px-3 py-2",
                    "font-rubik text-base text-surface-600 leading-6 rounded border-2 border-transparent",
                    "h-10 hover:border-surface-200 focus:outline-none focus:border focus:border-primary-500",
                    "focus:ring-2 focus:ring-primary-200", {
                    ["bg-surface-100"]: !selectedItem,
                    ["bg-white border-surface-200"]: selectedItem,
                    ["border border-primary-500 ring-2 ring-primary-200 hover:border-primary-500"]: open
                  }
                  )}
                >
                  <span className="block truncate">
                    {selectedItem ? selectedItem.name : "Seleccionar"}
                  </span>
                  <span className="w-5">
                    <CaretDownIcon className="w-5 h-5" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="ml-0 absolute w-full mt-1 overflow-auto text-base bg-white rounded shadow max-h-52 focus:outline-none">
                  {items.map((item) => (
                    /* Use the `active` state to conditionally style the active option. */
                    /* Use the `selected` state to conditionally style the selected option. */
                    <Listbox.Option key={item.id} value={item} as={Fragment}>
                      {({ active, selected }) => (
                        <li
                          className={cn(
                            "flex justify-between items-center p-4 m-0 h-12",
                            "font-rubik text-base text-surface-600 leading-6",
                            "rounded cursor-default select-none", {
                            ["bg-surface-50"]: active,
                            ["font-bold text-primary-500"]: selected
                          }
                          )}
                        >
                          <span className="block truncate">
                            {item.name}
                          </span>
                          {
                            selected &&
                            <span className="flex items-center w-4 pointer-events-none">
                              <CheckIcon className="w-4 h-4" />
                            </span>
                          }
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            )}
          </Listbox>
        </FormGroup>
      </div>
    </div>
  );
}

const SelectInvalidExample = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const isValid = false;

  return (
    <div className="flex justify-center">
      <div className="w-80">
        <FormGroup
          label="Label"
          labelFor="select-standard"
          required
          rightElement={
            <HelperIcon className="w-4" />
          }
        >
          <Listbox value={selectedItem} onChange={setSelectedItem}>
            {({ open }) => (
              <div className="relative">
                <Listbox.Button
                  id="select-standard"
                  className={cn(
                    "relative w-full flex justify-between items-center gap-3 bg-surface-100 px-3 py-2",
                    "font-rubik text-base text-surface-600 leading-6 rounded border-2 border-transparent",
                    "h-10 hover:border-surface-200 focus:outline-none focus:border focus:border-primary-500",
                    "focus:ring-2 focus:ring-primary-200", {
                    ["bg-surface-100"]: !selectedItem,
                    ["bg-white border-surface-200"]: selectedItem,
                    ["border border-primary-500 ring-2 ring-primary-200 hover:border-primary-500"]: open,
                    ["bg-white border-error-400 hover:border-error-400"]: !isValid
                  }
                  )}
                >
                  <span className="block truncate">
                    {selectedItem ? selectedItem.name : "Seleccionar"}
                  </span>
                  <span className="w-5">
                    <CaretDownIcon className="w-5 h-5" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="ml-0 absolute w-full mt-1 overflow-auto text-base bg-white rounded shadow max-h-52 focus:outline-none">
                  {items.map((item) => (
                    /* Use the `active` state to conditionally style the active option. */
                    /* Use the `selected` state to conditionally style the selected option. */
                    <Listbox.Option key={item.id} value={item} as={Fragment}>
                      {({ active, selected }) => (
                        <li
                          className={cn(
                            "flex justify-between items-center p-4 m-0 h-12",
                            "font-rubik text-base text-surface-600 leading-6",
                            "rounded cursor-default select-none", {
                            ["bg-surface-50"]: active,
                            ["font-bold text-primary-500"]: selected
                          }
                          )}
                        >
                          <span className="block truncate">
                            {item.name}
                          </span>
                          {
                            selected &&
                            <span className="flex items-center w-4 pointer-events-none">
                              <CheckIcon className="w-4 h-4" />
                            </span>
                          }
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            )}
          </Listbox>
          <FormGroup.Message type="error" message="Este campo es requerido" />
        </FormGroup>
      </div>
    </div>
  );
}

const SelectDisabledExample = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const disabled = true;

  return (
    <div className="flex justify-center">

      <div className="w-80">
        <Listbox value={selectedItem} onChange={setSelectedItem} disabled={disabled}>
          {({ open }) => (
            <div
              className={cn(
                "relative",
                { ["cursor-not-allowed"]: disabled }
              )}
            >
              <Listbox.Label
                className={cn(
                  "flex items-center font-normal font-rubik text-base",
                  "text-surface-300 mb-1 leading-7",
                  { ["text-surface-300"]: disabled }
                )}
              >
                <CalendarIcon
                  className={cn(
                    "w-5 h-5 mr-1", {
                      ["text-primary-500"]: !disabled,
                      ["text-surface-300"]: disabled
                    }
                  )}
                />
                <span>
                  Label
                </span>
                <span
                  className={cn("pl-1  font-normal", {
                    ["text-error-300"]: false,
                    ["text-surface-300"]: disabled
                  })}
                >
                  *
                </span>
              </Listbox.Label>
              <Listbox.Button
                className={cn(
                  "relative w-full flex justify-between items-center gap-3 bg-surface-100 px-3 py-2",
                  "font-rubik text-base  leading-6 rounded border-2 border-transparent",
                  "h-10  focus:outline-none focus:border", {
                    ["text-surface-600 hover:border-surface-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"]: !disabled,
                    ["text-surface-300 bg-surface-100 cursor-not-allowed"]: disabled
                  }
                )}
              >
                <span className="block truncate">
                  {selectedItem ? selectedItem.name : "Seleccionar"}
                </span>
                <span className="w-5">
                  <CaretDownIcon className="w-5 h-5" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="ml-0 absolute w-full mt-1 overflow-auto text-base bg-white rounded shadow max-h-52 focus:outline-none">
                {items.map((item) => (
                  /* Use the `active` state to conditionally style the active option. */
                  /* Use the `selected` state to conditionally style the selected option. */
                  <Listbox.Option key={item.id} value={item} as={Fragment}>
                    {({ active, selected }) => (
                      <li
                        className={cn(
                          "flex justify-between items-center p-4 m-0 h-12",
                          "font-rubik text-base text-surface-600 leading-6",
                          "rounded cursor-default select-none", {
                          ["bg-surface-50"]: active,
                          ["font-bold text-primary-500"]: selected
                        }
                        )}
                      >
                        <span className="block truncate">
                          {item.name}
                        </span>
                        {
                          selected &&
                          <span className="flex items-center w-4 pointer-events-none">
                            <CheckIcon className="w-4 h-4" />
                          </span>
                        }
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          )}
        </Listbox>
      </div>
    </div>
  );
}

export {
  SelectBasicExample,
  SelectCustomExample,
  SelectStandardExample,
  SelectStandardLabelExample,
  SelectLeadIconExample,
  SelectHelperIconExample,
  SelectInvalidExample,
  SelectDisabledExample
};