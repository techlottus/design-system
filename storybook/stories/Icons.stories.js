import Icon from "../components/Icon";
import CheckBoxActive from "../components/CheckBoxActive/CheckBoxActive"
import CheckBoxDefault from "../components/CheckBoxDefault/CheckBoxDefault"
import RadioButtonActive from "../components/RadioButtonActive/RadioButtonActive"
import RadioButtonDefault from "../components/RadioButtonDefault/RadioButtonDefault"

import mdx from "../components/Icons.mdx"

/** Icon component is a helper to use material icons, you can find all the icon names in https://fonts.google.com/icons */

export default {
  title: "ICONS/Icon",
  component: Icon,
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

const TemplateCheckActive = () => <CheckBoxActive />;
const TemplateCheckDefault = () => <CheckBoxDefault />;
const TemplateRadioActive = () => <RadioButtonActive />;
const TemplateRadioDefault = () => <RadioButtonDefault />;

const CheckBoxActives = TemplateCheckActive.bind({});
const CheckBoxDefaults = TemplateCheckDefault.bind({});
const RadioButtonActives = TemplateRadioActive.bind({});
const RadioButtonDefaults = TemplateRadioDefault.bind({});

export { CheckBoxActives, CheckBoxDefaults, RadioButtonActives, RadioButtonDefaults };
