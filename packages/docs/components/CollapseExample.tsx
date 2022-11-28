import React from "react";
import { Disclosure } from "@headlessui/react";
import { CaretDownIcon, CaretRightIcon, UnionIcon } from "@bedu-tmp/iconography";

const CollapseBasicExample = () => {
  return (
    <Disclosure>
      <Disclosure.Button className="font-montserrat text-surface-600 py-2">
        Collapsible item (Click here)
      </Disclosure.Button>
      <Disclosure.Panel className="font-rubik text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Disclosure.Panel>
    </Disclosure>
  )
};

const CollapseStyledExample = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="flex flex-col gap-y-5 bg-white border border-transparent px-4 py-5 rounded shadow-sm w-full hover:shadow focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
          <Disclosure.Button className="flex justify-between md:items-center p-0 text-surface-600 w-full focus:outline-none">
            <div className="flex md:items-center mr-auto gap-3">
              <div className="flex justify-center items-center bg-primary-100 text-primary-500 rounded p-2 w-10 h-10 max-h-10">
                <UnionIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3">
                <span className="font-rubik text-base text-surface-400 leading-6">
                  Módulo 1
                </span>
                <span className="font-montserrat font-bold text-xl text-surface-600 text-left leading-7">
                  ¿Cuáles son los requisitos del curso?
                </span>
              </div>
            </div>
            {
              open ?
                <CaretDownIcon className="w-6 h-6" />
                : <CaretRightIcon className="w-6 h-6" />
            }
          </Disclosure.Button>
          <Disclosure.Panel className="font-rubik text-base text-surface-600 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex magna, rutrum sit amet dolor in, condimentum accumsan leo. Mauris euismod, nunc a imperdiet dictum, sem est lobortis arcu.
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

const CollapseSkeletonExample = () => {
  return (
    <Disclosure>
      <div className="flex flex-col gap-y-5 bg-white border border-transparent px-4 py-5 rounded shadow-sm w-full hover:shadow">
        <Disclosure.Button className="flex justify-between p-0 w-full focus:outline-none">
          <div className="flex mr-auto gap-3 w-full md:hidden">
            <div className="bg-surface-50 rounded w-10 h-10 max-h-10" />
            <div className="flex flex-col items-start gap-1 w-full">
              <div className="bg-surface-50 rounded w-16 h-6" />
              <div className="bg-surface-50 rounded w-full h-14" />
            </div>
          </div>
          <div className="mr-auto bg-surface-50 rounded w-3/5 h-10 hidden md:block" />
          <div className="bg-surface-50 rounded w-6 h-6" />
        </Disclosure.Button>
        <Disclosure.Panel className="bg-surface-50 rounded w-full h-36 md:h-14" />
      </div>
    </Disclosure>
  );
};

export {
  CollapseBasicExample,
  CollapseStyledExample,
  CollapseSkeletonExample
};