import { AccordionItem } from "@lottuseducation/design_system";

export default {
  title: "AccordionItem",
  component: AccordionItem,
  tags: ["autodocs"],
  args: {
    title: "Item 1",
    content: [
      {
        text: "content",
        link: "https://www.deepl.com/es/translator",
        iconHoriz: true,
      },
      { text: "content" },
    ],
    icon: { iconName: "people", type: "outlined" },
    text: "texto",
    open: false,
    className: "border-b border-neutral-400",
  },
};

const Template = (args) => <AccordionItem {...args} />;

const Standard = Template.bind({});

export { Standard };
