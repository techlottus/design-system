/** @type { import('@storybook/react').Preview } */
import { Preview } from "@storybook/react";
import "../index.css";
import "keen-slider/keen-slider.min.css";
import "tailwindcss/tailwind.css";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
