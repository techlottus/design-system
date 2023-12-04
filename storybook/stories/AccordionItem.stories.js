import AccordionItem from "../components/AccordionItem";

export default {
  title: "MOLECULES/AccordionItem",
  component: AccordionItem,
  tags: ["autodocs"],
  args: {
    title: "Item 1",
    content: [
      {
        text: "content",
        link: "https://www.deepl.com/es/translator",
        icon: { iconName: "home", variant: "solid" },
      },
      {
        text: "content",
        link: "https://www.deepl.com/es/translator",
      },
    ],
    icon: { iconName: "people", type: "outlined" },
    text: "texto",
    open: false,
    className: "",
  },
};

const Template = (args) => <AccordionItem {...args} />;

const Standard = Template.bind({});

export { Standard };
