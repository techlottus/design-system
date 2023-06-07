/** @type {import('tailwindcss').Config} */
import * as tailwindBase from "@lottuseducation/tailwind-base";

module.exports = {
  content: [
    "./stories/**/*.stories.{js,jsx,ts,tsx}",
    "./node_modules/@lottuseducation/design_system/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@lottuseducation/slider/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [tailwindBase],
  theme: {},
  plugins: [],
};
