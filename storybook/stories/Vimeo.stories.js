import Vimeo from "../components/Vimeo";
/**Vimeo component is use to insert a Vimeo song or podcast. To use it you have to provide the id of the Vimeo url */
export default {
  title: "ATOMS/Vimeo",
  component: Vimeo,
  tags: ["autodocs"],
  args: {
    className: "w-full h-full",
    title: "Vimeo video",
    Id: "893534598?h=1e26c88e82&color=bf928b",
  },
};

const Template = (args) => <Vimeo {...args}/>;

const Video = Template.bind({});

export { Video};
