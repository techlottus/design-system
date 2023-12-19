import Spotify from "../components/Spotify";
/**Spotify component is use to insert a spotify song or podcast. To use it you have to provide the id of the spotify url */
export default {
  title: "ATOMS/Spotify",
  component: Spotify,
  tags: ["autodocs"],
  args: {
    className: "w-full h-full",
    title: "Spotify",
    Id: "1ixphys4A3NEXp6MDScfih?utm_source=generator",
  },
};

const Template = (args) => <Spotify {...args}/>;

const spotify = Template.bind({});

export { spotify};
