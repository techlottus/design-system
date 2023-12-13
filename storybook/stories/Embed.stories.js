import Embed from "../components/Embed";
/** Heading is a component for use titles with the correct styles (font family, weight, size) for the different screens */
export default {
  title: "Technical Components/Embed",
  component: Embed,
  tags: ["autodocs"],
  args: {
    className: "w-full h-full",
    title: "Embed video",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    srcFilter: "https://www.youtube.com/embed/",
    srcId: "ilOwwtVzcMY?si=OK090QbpuY-1P21j",
    allowFullScreen: true
  },
};

const Template = (args) => <Embed {...args}/>;
const spotifyTemplate = () => <Embed className= "w-full h-full" title= "Embed spotify" srcFilter= "https://open.spotify.com/embed/track/" srcId= "3iU043TomIIvDRGrQleMQO?utm_source=generator" />;
const mapTemplate = () => <Embed className= "w-full h-full" title= "Embed maps" srcFilter= "https://www.google.com/maps/embed?" srcId= "pb=!1m14!1m8!1m3!1d14413.196790730854!2d-100.9693975!3d25.4282588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86880ddfd7ad8ccb%3A0xba7ddb678e030314!2sQuesabirrias%20El%20campe!5e0!3m2!1ses!2smx!4v1702422558677!5m2!1ses!2smx" />;

const Video = Template.bind({});
const spotify = spotifyTemplate.bind({})
const map = mapTemplate.bind({})

export { Video,spotify, map };
