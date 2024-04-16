/** @type { import('@storybook/react').Preview } */
import lottusTheme from "./lottusTheme";
import "../index.css";
import "keen-slider/keen-slider.min.css";
import "tailwindcss/tailwind.css";
const preview = {
  parameters: {
    docs: {
      theme: lottusTheme,
    },
    darkMode: {
      dark: lottusTheme,
      light: lottusTheme,
    },
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
