import React from "react";
import { Tab } from "@headlessui/react";
import cn from "classnames";

const TabsBasic = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

const TabsStyled = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-5 w-full">
        <Tab.Group>
          <Tab.List>
            <Tab
              className={({selected}) => cn(
                "justify-center items-center py-3",
                "font-montserrat text-surface-600 text-base text-center",
                "border-b-2 leading-6 border-surface-100 w-40 h-12",
                { ["font-bold text-primary-500 border-primary-500"]: selected }
              )}
            >
              Title
            </Tab>
            <Tab
              className={({selected}) => cn(
                "justify-center items-center py-3",
                "font-montserrat text-surface-600 text-base text-center",
                "border-b-2 leading-6 border-surface-100 w-40 h-12",
                { ["font-bold text-primary-500 border-primary-500"]: selected }
              )}
            >
              Title
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="font-rubik text-surface-500 p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Tab.Panel>
            <Tab.Panel className="font-rubik text-surface-500 p-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="w-full">
        <Tab.Group>
          <Tab.List>
          <Tab
              className={({selected}) => cn(
                "justify-center items-center py-3 font-montserrat text-surface-600",
                "text-base text-center border-b-2 leading-6 border-surface-100 w-40 h-12",
                { ["font-bold text-primary-500 border-primary-500"]: selected }
              )}
            >
              Title
            </Tab>
            <Tab
              className={({selected}) => cn(
                "justify-center items-center py-3 font-montserrat text-surface-600",
                "text-base text-center border-b-2 leading-6 border-surface-100 w-40 h-12",
                { ["font-bold text-primary-500 border-primary-500"]: selected }
              )}
            >
              Title
            </Tab>
            <Tab
              className={({selected}) => cn(
                "justify-center items-center py-3 font-montserrat text-surface-600",
                "text-base text-center border-b-2 leading-6 border-surface-100 w-40 h-12",
                { ["font-bold text-primary-500 border-primary-500"]: selected }
              )}
            >
              Title
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="font-rubik text-surface-500 p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Tab.Panel>
            <Tab.Panel className="font-rubik text-surface-500 p-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Tab.Panel>
            <Tab.Panel className="font-rubik text-surface-500 p-3">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

const TabsDisabled = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-5 w-full">
        <Tab.Group >
          <Tab.List>
            <Tab
              className={({selected}) => cn(
                "justify-center items-center py-3 font-montserrat text-surface-600 text-base text-center border-b-2 leading-6 border-surface-100 w-40 h-12",
                { ["font-bold text-primary-500 border-primary-500"]: selected }
              )}
            >
              Title
            </Tab>
            <Tab
              className={({selected}) => cn(
                "justify-center items-center py-3 font-montserrat text-surface-600 text-base text-center border-b-2 leading-6 border-surface-100 w-40 h-12",
                { ["font-bold text-primary-500 border-primary-500"]: selected }
              )}
              disabled
            >
              Title
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="font-rubik text-surface-500 p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Tab.Panel>
            <Tab.Panel className="font-rubik text-surface-500 p-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export {
  TabsBasic,
  TabsStyled,
  TabsDisabled
};