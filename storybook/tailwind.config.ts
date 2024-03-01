/** @type {import('tailwindcss').Config} */
import * as tailwindBaseLottus from "./tenants/LOTTUS/tailwindBase"
import * as tailwindBase from "@lottuseducation/tailwind-base/lib/tailwind-base.js";

module.exports = {
  important:true,
  content: [
    "./stories/**/*.stories.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}"
    ,
  ],
  presets: [tailwindBaseLottus.default, tailwindBase.default],
  theme: {},
  plugins: [],
};
