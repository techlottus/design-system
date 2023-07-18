import { PromoLink } from "@lottuseducation/design_system";
export default {
  title: "PromoLink",
  component: PromoLink,
  tags: ["autodocs"],
  args: {
    link: "https://www.caffeineinformer.com/death-by-caffeine",
    text: "Demo PromoLink",
    imageUrl:
      "https://bachilleratorapido.com/wp-content/uploads/2020/07/La-UANE-de-Saltillo-2.jpg",
    border: "border-outstanding-100 shadow-outstanding-100",
    overlay: "bg-outstanding-100",
    className: "",
    variant: "image",
  },

  argTypes: {
    border: {
      options: [
        "border-outstanding-100 shadow-outstanding-100",
        "border-outstanding-200 shadow-outstanding-200",
        "border-outstanding-300 shadow-outstanding-300",
        "border-outstanding-400 shadow-outstanding-400",
        "border-outstanding-200 shadow-outstanding-200",
        "border-neutral-500 shadow-neutral-500",
        "border-neutral-800 shadow-neutral-800",
        "border-neutral-900 shadow-neutral-900",
        "",
      ],
      control: { type: "select" },
    },
    overlay: {
      options: [
        "bg-outstanding-100 ",
        "bg-outstanding-200 ",
        "bg-outstanding-300 ",
        "bg-outstanding-400 ",
        "bg-neutral-500 ",
        "bg-neutral-800 ",
        "bg-neutral-900 ",
        "",
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
