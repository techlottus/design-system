import Card from "../components/Card";
/** 
Cards are surfaces that display content and actions on a single topic.
They should be easy to scan for relevant and actionable information. Elements, such as text and images, should be placed on them in a way that clearly indicates hierarchy. */
export default {
  title: "ORGANISMS/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Card",
    content:
      "Lorem ipsum dolor sit amet consectetur. Urna curabitur sit faucibus vitae. Elit dignissim tempus pharetra risus porta in phasellus magnis pellentesque.",
    subtitle: "subtitle",
    orientation: "horizontal",
    imageAspectRatio: "2/1",
    textLink: { text: "Ver más", href: "https://jonsuh.com/hamburgers/" },
    className: "",
  },
  args1: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Card",
    content: "Demo Card",
    subtitle: "subtitle",
    orientation: "vertical",
    imageAspectRatio: "2/1",
    textLink: { text: "Ver más", href: "https://jonsuh.com/hamburgers/" },
  },
  args2: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Card",
    content:
      "Lorem ipsum dolor sit amet consectetur. Urna curabitur sit faucibus vitae. Elit dignissim tempus pharetra risus porta in phasellus magnis pellentesque.",
    subtitle: "subtitle",
    orientation: "horizontal",
    imageAspectRatio: "2/1",
    textLink: { text: "Ver más", href: "https://jonsuh.com/hamburgers/" },
  },

  argTypes: {
    orientation: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
    imageAspectRatio: {
      options: ["2/1", "4/3"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Card {...args} />;
const Row = (args1) => (
  <div>
    <div className="flex flex-row space-x-4">
      <Card {...args1} />
      <Card {...args1} />
      <Card {...args1} />
    </div>
  </div>
);
const Column = (args2) => (
  <div>
    <div className="flex flex-col space-y-4 w-1/2 border p-2">
      <Card {...args2} />
      <Card {...args2} />
      <Card {...args2} />
    </div>
  </div>
);

const Standard = Template.bind({});
const CardRow = Row.bind({});
const CardCol = Column.bind({});

export { Standard, CardRow, CardCol };
