import { Carousel } from "@lottuseducation/carousel";
export default {
  title: "Carousel",
  component: Carousel,
  tags: ["autodocs"],
  args: {
    data: [
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 1",
        text: "Lorem ipsum dolor sit amet consectetur. Urna curabitur sit faucibus vitae. Elit dignissim tempus pharetra risus porta in phasellus magnis pellentesque.",
        subtitle: "Subtitle 1",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 2",
        text: "Demo Card content 2",
        subtitle: "Subtitle 2",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 3",
        text: "Demo Card 3",
        subtitle: "Subtitle 3",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 4",
        text: "Demo Card 4",
        subtitle: "Subtitle 4",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 5",
        text: "Demo Card 5",
        subtitle: "Subtitle 5",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 6",
        text: "Demo Card 6",
        subtitle: "Subtitle 6",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 7",
        text: "Demo Card 7",
        subtitle: "Subtitle 7",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
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
