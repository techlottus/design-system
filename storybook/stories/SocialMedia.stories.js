import SocialMedia from "../components/SocialMedia";
export default {
  title: "MOLECULES/SocialMedia",
  component: SocialMedia,
  tags: ["autodocs"],
  args: {
    className: "text-primary-600",
    socialMedia: [
      {
        socialName: "instagram",
        alt: "instagram-logo",
        link: "https://www.instagram.com/",
      },
      {
        socialName: "facebook",
        alt: "facebook-logo",
        link: "https://www.facebook.com",
      },
      {
        socialName: "tiktok",
        alt: "tiktok-logo",
        link: "https://www.tiktok.com",
      },
      {
        socialName: "twitter",
        alt: "twitter-logo",
        link: "https://www.twitter.com",
      },
    ],
  },
};

const Template = (args) => <SocialMedia {...args} />;

const Standard = Template.bind({});

export { Standard };
