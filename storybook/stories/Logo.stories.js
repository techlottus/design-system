import Logo from "../components/Logo";
/** Logo component use bg-logo and take the url image from multitenant. */
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
