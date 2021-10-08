import React from "react";
import { Menu } from "@headlessui/react";
import { AdvancedLevelIcon, CaretDownIcon, CheckIcon, EditIcon } from "@exponentialeducation/iconography";
import cn from "classnames";

const menuItemCommonClasses = "flex items-center w-full p-4 rounded font-rubik text-base text-surface-600 leading-5";

const DropdownBasicExample = () => {
  return (
    <Menu>
      <Menu.Button>More <small>(Click me)</small></Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-surface-300"}`}
              href="#"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-surface-300"}`}
              href="#"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

const DropdownLightTextExample = () => {
  return (
    <div className="flex justify-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className={cn(
                "inline-flex justify-between items-center w-full h-10 px-3 py-2 font-montserrat font-bold text-base leading-6 border border-transparent rounded focus:bg-surface-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200", {
                ["text-white bg-surface-600 hover:bg-surface-800"]: !open,
                ["text-surface-600 bg-surface-200 border-primary-500 ring-2 ring-primary-200 hover:bg-surface-200"]: open
              }
              )}
            >
              <span className="mr-3">Label</span>
              <CaretDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-36 mt-2 origin-top-left bg-white rounded shadow-sm z-10 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

const DropdownLightIconExample = () => {
  return (
    <div className="flex justify-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className={cn(
                "inline-flex justify-between items-center w-full h-10 px-3 py-2 font-montserrat font-bold text-base leading-6 border border-transparent rounded focus:bg-surface-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200", {
                ["text-white bg-surface-600 hover:bg-surface-800"]: !open,
                ["text-surface-600 bg-surface-200 border-primary-500 ring-2 ring-primary-200 hover:bg-surface-200"]: open
              }
              )}
            >
              <div className="flex items-center w-full mr-3">
                <AdvancedLevelIcon className="w-5 h-5 mr-2" />
                <span>Label</span>
              </div>
              <CaretDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-36 mt-2 origin-top-left bg-white rounded shadow-sm z-10 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

const DropdownOutlineTextExample = () => {
  return (
    <div className="flex justify-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className={cn(
                "inline-flex justify-between items-center w-full h-10 px-3 py-2 font-montserrat font-bold text-base leading-6 border-2 border-surface-500 rounded hover:text-white hover:bg-surface-500 focus:bg-surface-500 focus:text-white focus:border focus:border-primary-500 focus:ring-2 focus:ring-primary-200", {
                ["text-surface-600 bg-transparent"]: !open,
                ["text-white bg-surface-500 border-primary-500 ring-2 ring-primary-200"]: open
              }
              )}
            >
              <span className="mr-3">Label</span>
              <CaretDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-36 mt-2 origin-top-left bg-white rounded shadow-sm z-10 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

const DropdownOutlineIconExample = () => {
  return (
    <div className="flex justify-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className={cn(
                "inline-flex justify-between items-center w-full h-10 px-3 py-2 font-montserrat font-bold text-base leading-6 border-2 border-surface-500 rounded hover:text-white hover:bg-surface-500 focus:bg-surface-500 focus:text-white focus:border focus:border-primary-500 focus:ring-2 focus:ring-primary-200", {
                ["text-surface-600 bg-transparent"]: !open,
                ["text-white bg-surface-500 border-primary-500 ring-2 ring-primary-200"]: open
              }
              )}
            >
              <div className="flex items-center w-full mr-3">
                <AdvancedLevelIcon className="w-5 h-5 mr-2" />
                <span>Label</span>
              </div>
              <CaretDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-36 mt-2 origin-top-left bg-white rounded shadow-sm z-10 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

const DropdownDarkTextExample = () => {
  return (
    <div className="flex justify-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className={cn(
                "inline-flex justify-between items-center w-full h-10 px-3 py-2 font-montserrat font-bold text-base leading-6 border border-transparent rounded focus:bg-surface-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:bg-surface-200", {
                ["text-white bg-surface-600 hover:bg-surface-800 dark:text-surface-600 dark:bg-surface-100 dark:hover:bg-surface-200"]: !open,
                ["text-surface-600 bg-surface-200 border-primary-500 ring-2 ring-primary-200 dark:bg-surface-200 hover:bg-surface-200"]: open
              }
              )}
            >
              <span className="mr-3">Label</span>
              <CaretDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-36 mt-2 origin-top-left bg-white rounded shadow-sm z-10 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

const DropdownDarkIconExample = () => {
  return (
    <div className="flex justify-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className={cn(
                "inline-flex justify-between items-center w-full h-10 px-3 py-2 font-montserrat font-bold text-base leading-6 border border-transparent rounded focus:bg-surface-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:bg-surface-200", {
                ["text-white bg-surface-600 hover:bg-surface-800 dark:text-surface-600 dark:bg-surface-100 dark:hover:bg-surface-200"]: !open,
                ["text-surface-600 bg-surface-200 border-primary-500 ring-2 ring-primary-200 dark:bg-surface-200 hover:bg-surface-200"]: open
              }
              )}
            >
              <div className="flex items-center w-full mr-3">
                <AdvancedLevelIcon className="w-5 h-5 mr-2" />
                <span>Label</span>
              </div>
              <CaretDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-36 mt-2 origin-top-left bg-white rounded shadow-sm z-10 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

const DropdownTextOnlyExample = () => {
  return (
    <div className="flex justify-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className={cn(
                "inline-flex justify-between items-center w-full h-10 px-3 py-2 font-montserrat font-bold text-base leading-6 border border-transparent rounded focus:bg-surface-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:bg-surface-200", {
                ["text-white bg-surface-600 hover:bg-surface-800 dark:text-surface-600 dark:bg-surface-100 dark:hover:bg-surface-200"]: !open,
                ["text-surface-600 bg-surface-200 border-primary-500 ring-2 ring-primary-200 dark:bg-surface-200 hover:bg-surface-200"]: open
              }
              )}
            >
              <span className="mr-3">Label</span>
              <CaretDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-36 mt-2 origin-top-left bg-white rounded shadow-sm z-10 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    Item
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

const DropdownIconLeadExample = () => {
  return (
    <div className="flex justify-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className={cn(
                "inline-flex justify-between items-center w-full h-10 px-3 py-2 font-montserrat font-bold text-base leading-6 border border-transparent rounded focus:bg-surface-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:bg-surface-200", {
                ["text-white bg-surface-600 hover:bg-surface-800 dark:text-surface-600 dark:bg-surface-100 dark:hover:bg-surface-200"]: !open,
                ["text-surface-600 bg-surface-200 border-primary-500 ring-2 ring-primary-200 dark:bg-surface-200 hover:bg-surface-200"]: open
              }
              )}
            >
              <span className="mr-3">Label</span>
              <CaretDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-36 mt-2 origin-top-left bg-white rounded shadow-sm z-10 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    <EditIcon className="w-4 h-4 mr-2" />
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    <EditIcon className="w-4 h-4 mr-2" />
                    Item
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    <EditIcon className="w-4 h-4 mr-2" />
                    Item
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

const DropdownSelectionExample = () => {
  return (
    <div className="flex justify-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              className={cn(
                "inline-flex justify-between items-center w-full h-10 px-3 py-2 font-montserrat font-bold text-base leading-6 border border-transparent rounded focus:bg-surface-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:bg-surface-200", {
                ["text-white bg-surface-600 hover:bg-surface-800 dark:text-surface-600 dark:bg-surface-100 dark:hover:bg-surface-200"]: !open,
                ["text-surface-600 bg-surface-200 border-primary-500 ring-2 ring-primary-200 dark:bg-surface-200 hover:bg-surface-200"]: open
              }
              )}
            >
              <span className="mr-3">Label</span>
              <CaretDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-36 mt-2 origin-top-left bg-white rounded shadow-sm z-10 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      "justify-between",
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active,
                    }
                    )}
                  >
                    <div className="flex items-center">
                      <EditIcon className="w-4 h-4 mr-2" />
                      Item
                    </div>
                    {
                      active &&
                      <CheckIcon className="text-primary-500 w-4 h-4" />
                    }
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      "justify-between",
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    <div className="flex items-center">
                      <EditIcon className="w-4 h-4 mr-2" />
                      Item
                    </div>
                    {
                      active &&
                      <CheckIcon className="text-primary-500 w-4 h-4" />
                    }
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={cn(
                      "justify-between",
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    <div className="flex items-center">
                      <EditIcon className="w-4 h-4 mr-2" />
                      Item
                    </div>
                    {
                      active &&
                      <CheckIcon className="text-primary-500 w-4 h-4" />
                    }
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

const DropdownDisabledExample = () => {
  const disabled = true;

  return (
    <div className="flex justify-center w-full">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button
              disabled={disabled}
              className={cn(
                "inline-flex justify-between items-center w-full h-10 px-3 py-2 font-montserrat font-bold text-base leading-6 border border-transparent rounded focus:bg-surface-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:bg-surface-200", {
                ["text-white bg-surface-600 hover:bg-surface-800 dark:text-surface-600 dark:bg-surface-100 dark:hover:bg-surface-200"]: !open && !disabled,
                ["text-surface-600 bg-surface-200 border-primary-500 ring-2 ring-primary-200 dark:bg-surface-200 hover:bg-surface-200"]: open && !disabled,
                ["text-surface-300 bg-surface-100 cursor-not-allowed"]: disabled
              }
              )}
            >
              <span className="mr-3">Label</span>
              <CaretDownIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 w-36 mt-2 origin-top-left bg-white rounded shadow-sm z-10 focus:outline-none">
              <Menu.Item disabled>
                {({ active }) => (
                  <button
                    className={cn(
                      "justify-between",
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active,
                    }
                    )}
                  >
                    <div className="flex items-center">
                      <EditIcon className="w-4 h-4 mr-2" />
                      Item
                    </div>
                    {
                      active &&
                      <CheckIcon className="text-primary-500 w-4 h-4" />
                    }
                  </button>
                )}
              </Menu.Item>
              <Menu.Item disabled>
                {({ active }) => (
                  <button
                    className={cn(
                      "justify-between",
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    <div className="flex items-center">
                      <EditIcon className="w-4 h-4 mr-2" />
                      Item
                    </div>
                    {
                      active &&
                      <CheckIcon className="text-primary-500 w-4 h-4" />
                    }
                  </button>
                )}
              </Menu.Item>
              <Menu.Item disabled>
                {({ active }) => (
                  <button
                    className={cn(
                      "justify-between",
                      menuItemCommonClasses, {
                      ["bg-surface-50"]: active
                    }
                    )}
                  >
                    <div className="flex items-center">
                      <EditIcon className="w-4 h-4 mr-2" />
                      Item
                    </div>
                    {
                      active &&
                      <CheckIcon className="text-primary-500 w-4 h-4" />
                    }
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

export {
  DropdownBasicExample,
  DropdownLightTextExample,
  DropdownLightIconExample,
  DropdownOutlineTextExample,
  DropdownOutlineIconExample,
  DropdownDarkTextExample,
  DropdownDarkIconExample,
  DropdownTextOnlyExample,
  DropdownIconLeadExample,
  DropdownSelectionExample,
  DropdownDisabledExample
}