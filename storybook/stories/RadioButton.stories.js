import React from "react";
import RadioButtonCard from "../RadioGroup/RadioButton/RadioButtonCard"
import mdx from "../RadioGroup/RadioButton/RadioGroup.mdx"

/** Radio Button give you the same functionality as native HTML radio inputs, without any of the styling. They're perfect for building out custom UIs for selectors.*/
export default {
  title: "MOLECULES/RadioGroup/RadioButton",
  component: RadioButtonCard,
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

const TemplateRadioButtonCard = (args) => (
  <RadioButtonCard {...args}>
  </RadioButtonCard>
);

const RadioButtonCards = TemplateRadioButtonCard.bind({

});


export { RadioButtonCards };
