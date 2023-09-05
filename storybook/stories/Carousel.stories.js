import Carousel from "../components/Carousel";
export default {
  title: "Carousel",
  component: Carousel,
  tags: ["autodocs"],
  args: {
    data: [
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 1",
        content:
          "Lorem ipsum dolor sit amet consectetur. Urna curabitur sit faucibus vitae. Elit dignissim tempus pharetra risus porta in phasellus magnis pellentesque.",
        subtitle: "Subtitle 1",
        textLink: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 2",
        content: "Demo Card content 2",
        subtitle: "Subtitle 2",
        textLink: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 3",
        content: "Demo Card 3",
        subtitle: "Subtitle 3",
        textLink: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 4",
        content: "Demo Card 4",
        subtitle: "Subtitle 4",
        textLink: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 5",
        content: "Demo Card 5",
        subtitle: "Subtitle 5",
        textLink: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 6",
        content: "Demo Card 6",
        subtitle: "Subtitle 6",
        textLink: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 7",
        content: "Demo Card 7",
        subtitle: "Subtitle 7",
        textLink: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
    ],
    variant: "card",
  },
  argTypes: {
    variant: {
      options: ["img", "card"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Carousel {...args} />;

const carousel = Template.bind({});

export { carousel };
