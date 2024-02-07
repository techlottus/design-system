import React from "react";
import RadioButtonCard from "../RadioGroup/RadioButtonCard"
import SelectChip from "../RadioGroup/SelectChip"
import CheckBox from "../RadioGroup/CheckBox"
import mdx from "../RadioGroup/RadioGroup.mdx"

/** Radio Button give you the same functionality as native HTML radio inputs, without any of the styling. They're perfect for building out custom UIs for selectors.*/
export default {
  title: "MOLECULES/RadioGroup",
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

const TemplateGroup = (args) => (
  <SelectChip {...args}>
  </SelectChip>
);

const TemplateCheck = (args) => (
  <CheckBox {...args}>
  </ CheckBox>
);

const RadioButtonCards = TemplateRadioButtonCard.bind({

});

const SelectChips  = TemplateGroup.bind({

});

const CheckBoxes = TemplateCheck.bind({

});


export { RadioButtonCards, SelectChips, CheckBoxes };
