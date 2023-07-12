import { Accordion } from "@lottuseducation/design_system";
export default {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    itemsData: [
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
