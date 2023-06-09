import { BannerNumber } from "@lottuseducation/numbers";
export default {
  title: "BannerNumber",
  component: BannerNumber,
  tags: ["autodocs"],
  args: {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo BannerNumber",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    overlay: "",
    contentVariant: "dark",
    numbers: [
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        variant: "",
      },
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        variant: "",
      },
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        variant: "",
      },
      {
        number: 12000,
        title: "Numbers",
        iconName: "people",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        variant: "",
      },
    ],
  },
  argTypes: {
    contentVariant: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
    overlay: {
      options: ["dark", "light", ""],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <BannerNumber {...args} />;

const Standard = Template.bind({});

export { Standard };
