import { Card } from "@lottuseducation/design_system";
import { Heading } from "@lottuseducation/design_system";
export default {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Card",
    content:
      "Lorem ipsum dolor sit amet consectetur. Urna curabitur sit faucibus vitae. Elit dignissim tempus pharetra risus porta in phasellus magnis pellentesque.",
    subtitle: "subtitle",
    type: "horizontal",
    imageAspectRatio: "2/1",
    textLink: { text: "Ver más", href: "https://jonsuh.com/hamburgers/" },
    className: "",
  },
  args1: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Card",
    content: "Demo Card",
    subtitle: "subtitle",
    type: "vertical",
    imageAspectRatio: "2/1",
    textLink: { text: "Ver más", href: "https://jonsuh.com/hamburgers/" },
  },
  args2: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Card",
    content:
      "Lorem ipsum dolor sit amet consectetur. Urna curabitur sit faucibus vitae. Elit dignissim tempus pharetra risus porta in phasellus magnis pellentesque.",
    subtitle: "subtitle",
    type: "horizontal",
    imageAspectRatio: "2/1",
    textLink: { text: "Ver más", href: "https://jonsuh.com/hamburgers/" },
  },

  argTypes: {
    type: {
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
    <div className="py-4">
      <Heading
        title="Card adapt their size depending on the highest card."
        variant="h-5"
        font="primary"
      />
    </div>
    <div className="flex flex-row space-x-4">
      <Card {...args1} />
      <Card {...args1} />
      <Card {...args1} />
      <Card
        imageUrl="https://wallpapercave.com/wp/wp2599594.jpg"
        textLink={{
          text: "Ver más",
          route: "https://jonsuh.com/hamburgers/",
        }}
        subtitle="subtitle"
        content="Demo Card Demo Card Demo Card"
        title="Demo Card"
        type="vertical"
        imageAspectRatio="2/1"
      />
    </div>
  </div>
);
const Column = (args2) => (
  <div>
    <div className="py-4 bg-neutral-900">
      <Heading
        title="The Card component adapts its size depending on the width of the container."
        variant="h-5"
        font="primary"
      />
    </div>
    <div className="flex flex-col space-y-4 w-1/2 border p-2">
      <Card {...args2} />
      <Card {...args2} />
      <Card {...args2} />
      <Card
        imageUrl="https://wallpapercave.com/wp/wp2599594.jpg"
        textLink={{
          text: "Ver más",
          route: "https://jonsuh.com/hamburgers/",
        }}
        subtitle="subtitle"
        content="Demo Card Demo Card Demo Card"
        title="Demo Card"
        type="horizontal"
        imageAspectRatio="2/1"
      />
    </div>
  </div>
);

const Standard = Template.bind({});
const CardRow = Row.bind({});
const CardCol = Column.bind({});

export { Standard, CardRow, CardCol };
