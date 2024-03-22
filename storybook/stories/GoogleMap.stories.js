import GoogleMap from "../components/GoogleMap";
/** GoogleMap component is use to insert a google map direction. To use it you have to provide the id of the url from google maps */
export default {
  title: "ATOMS/GoogleMap",
  component: GoogleMap,
  tags: ["autodocs"],
  args: {
    className: "w-full h-full",
    title: "Map",
    Id: "pb=!1m14!1m8!1m3!1d14413.196790730854!2d-100.9693975!3d25.4282588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86880d7bed92fd6f%3A0x787c1dcf2900d0c!2sPasteler%C3%ADa%20Lety!5e0!3m2!1ses!2smx!4v1702572549986!5m2!1ses!2smx",
  },
};

const Template = (args) => <GoogleMap {...args}/>;

const Map = Template.bind({});

export { Map};
