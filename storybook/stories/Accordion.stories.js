import Accordion from "../components/Accordion";
export default {
  title: "ORGANISMS/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    items: [
      {
        title: "Item 1",
        content: [
          { text: "content", link: "https://www.deepl.com/es/translator" },
          { text: "text", link: "https://www.deepl.com/es/translator" },
        ],
        icon: { iconName: "people", type: "outlined" },
        text: "texto",
      },
      {
        title: "Item 1",
        content: [{ text: "content" }],
        icon: { iconName: "people", type: "outlined" },
        text: "texto",
      },
    ],
    expandAll: false,
  },
};

const Template = (args) => <Accordion {...args} />;

const Standard = Template.bind({});

export { Standard };
