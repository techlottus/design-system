import BannerNumber from "../components/BannerNumbers";
export default {
  title: "BannerNumber",
  component: BannerNumber,
  tags: ["autodocs"],
  args: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo BannerNumber",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    overlay: "",
    className: "text-surface-100",
    numbers: [
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  argTypes: {
    overlay: {
      options: ["dark", "light", ""],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <BannerNumber {...args} />;

const Standard = Template.bind({});

export { Standard };
