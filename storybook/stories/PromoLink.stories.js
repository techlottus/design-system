import { PromoLink } from "@lottuseducation/design_system";
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
    variant: "image",
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
        "transparent",
      ],
      control: { type: "select" },
    },
    variant: {
      options: ["image", "shadow"],
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
