import React from "react";
import RadioButton from "../RadioButton/RadioButton"
import RadioSimpleGroup from "../RadioButton/RadioGroup"
import mdx from "./RadioButton.mdx"

/** Radio Button give you the same functionality as native HTML radio inputs, without any of the styling. They're perfect for building out custom UIs for selectors.*/
export default {
  title: "MOLECULES/Radio Button",
  component: RadioButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {
    className: "",
    size: "md"
  }

};

const Template = (args) => (
  <RadioButton {...args}>
  </RadioButton>
);

const TemplateTwo = (args) => (
  <RadioSimpleGroup {...args}>
  </RadioSimpleGroup>
);

const Standard = Template.bind({

});

const Group = TemplateTwo.bind({

});


export { Standard, Group };
