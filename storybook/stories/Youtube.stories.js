import Youtube from "../components/Youtube";
/**Youtube component is use to insert a Youtube song or podcast. To use it you have to provide the id of the Youtube url */
export default {
  title: "ATOMS/Youtube",
  component: Youtube,
  tags: ["autodocs"],
  args: {
    className: "w-full h-full",
    title: "Youtube video",
    Id: "ilOwwtVzcMY?si=OK090QbpuY-1P21j",
  },
};

const Template = (args) => <Youtube {...args}/>;

const Video = Template.bind({});

export { Video};
