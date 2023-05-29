import PromoLink from "./PromoLink";
export default {
  title: "PromoLink",
  component: PromoLink,
  tags: ["autodocs"],
  args: {
    link: "https://www.caffeineinformer.com/death-by-caffeine",
    text: "Demo PromoLink",
    imgUrl:
      "https://bachilleratorapido.com/wp-content/uploads/2020/07/La-UANE-de-Saltillo-2.jpg",
    color: "color1",
    className: "",
  },

  argTypes: {
    color: {
      options: [
        "color1",
        "color2",
        "color3",
        "color4",
        "color5",
        "color6",
        "color7",
      ],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <PromoLink {...args} />;
const Example = (args) => (
  <div className="flex space-x-4">
    <PromoLink {...args} />
    <PromoLink {...args} />
    <PromoLink {...args} />
    <PromoLink {...args} />
  </div>
);

const Standard = Template.bind({});
const ExamplePromoLinks = Example.bind({});

export { Standard, ExamplePromoLinks };
