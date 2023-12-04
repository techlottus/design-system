import PromoLink from "../components/PromoLink";
/** The promolink is a space reserved for advertising on a web page, in the form of an image. By clicking on this image, the user is redirected to a web page or landing page. 

It is used within the website in order to take users to another part of the same website and/or to advertise an offer; or it can also appear on a different website, redirecting to the website that advertises the service/product. 

Generally it will be composed of image, text and button (CTA). */
export default {
  title: "ORGANISMS/PromoLink",
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
        "border-surface-500 shadow-surface-500",
        "border-surface-800 shadow-surface-800",
        "border-surface-900 shadow-surface-900",
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
        "bg-surface-500 ",
        "bg-surface-800 ",
        "bg-surface-900 ",
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
