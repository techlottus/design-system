import Accordion from "../../design-system/src/components/Accordion";
export default {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    itemsData: [
      {
        data: {
          title: "Item 1",
          content: [
            { text: "content", link: "https://www.deepl.com/es/translator" },
            { text: "text", link: "https://www.deepl.com/es/translator" },
          ],
          icon: { iconName: "people", type: "outlined" },
          text: "texto",
        },
        open: true,
        borderDownOn: false,
        ColorClass: "border-neutral-400",
      },
      {
        data: {
          title: "Item 1",
          content: [{ text: "content" }],
          icon: { iconName: "people", type: "outlined" },
          text: "texto",
        },
        borderDownOn: true,
        ColorClass: "border-primary-500",
      },
    ],
    oneItemOpen: true,
  },
};

const Template = (args) => <Accordion {...args} />;

const Standard = Template.bind({});

export { Standard };
