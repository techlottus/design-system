/** @type {import('tailwindcss').Config} */
import * as tailwindBaseLottus from "./tenants/LOTTUS/tailwindBase"
import * as tailwindBase from "@lottuseducation/tailwind-base";

module.exports = {
  content: [
    "./stories/**/*.stories.{js,jsx,ts,tsx}",
    "./node_modules/@lottuseducation/design_system/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@lottuseducation/slider/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@lottuseducation/carousel/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@lottuseducation/numbers/**/*.{js,jsx,ts,tsx}",
    ,
  ],
  presets: [tailwindBaseLottus.default, tailwindBase.default],
  theme: {},
  plugins: [],
};
