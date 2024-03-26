import React from "react";
import CheckBox from "../RadioGroup/CheckBox/CheckBox"
import mdx from "../RadioGroup/CheckBox/CheckBox.mdx"
import CheckBoxLabel from "../RadioGroup/CheckBox/CheckBoxLabel";
import CheckBoxLink from "../RadioGroup/CheckBox/CheckBoxLink";

/** Radio Button give you the same functionality as native HTML radio inputs, without any of the styling. They're perfect for building out custom UIs for selectors.*/
export default {
  title: "MOLECULES/RadioGroup/Checkbox",
  component: CheckBox,
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

const TemplateCheck = (args) => (
  <CheckBox {...args}>
  </ CheckBox>
);

const TemplateCheckLabel = (args) => (
  <CheckBoxLabel {...args}>
  </ CheckBoxLabel>
);

const TemplateCheckLink = (args) => (
  <CheckBoxLink {...args}>
  </ CheckBoxLink>
);

const CheckBoxes = TemplateCheck.bind({

});

const CheckBoxLabels = TemplateCheckLabel.bind({

});

const CheckBoxLinks = TemplateCheckLink.bind({

});

export { CheckBoxes, CheckBoxLabels, CheckBoxLinks };
