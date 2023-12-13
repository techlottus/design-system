import Logo from "../components/Logo";
/** Heading is a component for use titles with the correct styles (font family, weight, size) for the different screens */
export default {
  title: "ATOMS/Logo",
  component: Logo,
  tags: ["autodocs"],
  args:{

  }

};

const Template = ({...args}) => <Logo/>;

const Standard = Template.bind({});

export { Standard };
