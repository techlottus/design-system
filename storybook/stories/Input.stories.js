import React from "react";
import Input  from "../components/Input";
/** The input text is an element that is generally used in forms for the user to enter different types of data such as text, numbers, emails, passwords, among others. It also allows you to send and collect the input of this data */

export default {
  title: "Molecules/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    className: "pl-18 pr-20",
    leftElement: <span className=" text-surface-300 select-none">https://</span>,
    rightElement: <span className="text-surface-300 select-none">.example.org</span>
  },
};

const Template = (args) => (
  <Input   {...args}/>
);

const Standard = Template.bind({});

export { Standard };