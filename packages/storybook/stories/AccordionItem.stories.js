import AccordionItem from "../../portalverse/src/components/AccordionItem/AccordionItem";

export default {
  title: "AccordionItem",
  component: AccordionItem,
  tags: ["autodocs"],
  args: {
    data: {
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
    },
    open: true,
    borderDownOn: true,
  },
};

const Template = (args) => <AccordionItem {...args} />;

const Standard = Template.bind({});

export { Standard };
