import { Heading } from "@lottuseducation/design_system";
import { Button } from "@lottuseducation/design_system";
export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    id: "button",
    label: "Demo Button",
    variant: "primary",
    size: "sm",
    disabled: false,
    iconName: "",
    onClick: () => {},
    className: "",
  },
  args2: {
    id: "button",
    label: "Demo Button",
    variant: "primary",
    size: "sm",
    disabled: false,
    iconName: "",
    onClick: () => {},
    className: "w-full",
  },
  argTypes: {
    variant: {
      options: ["primary", "outlined", "text", "outlined-negative"],
      control: { type: "select" },
    },
    size: {
      options: ["xsm", "sm", "md", "lg"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;
const ButtonExpand = (args2) => (
  <div className="w-full">
    <div className="py-4 w-full">
      <Heading
        title="To expand the button you just need to add the classname= w-full"
        font="principal"
        type="h-5"
      />
    </div>
    <div className="w-full">
      <Button {...args2} />
    </div>
  </div>
);

const Standard = Template.bind({});
const Expand = ButtonExpand.bind({});

export { Standard, Expand };
