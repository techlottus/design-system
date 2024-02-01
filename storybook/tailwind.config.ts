/** @type {import('tailwindcss').Config} */
import * as tailwindBaseLottus from "./tenants/LOTTUS/tailwindBase"
import * as tailwindBase from "@lottuseducation/tailwind-base/lib/tailwind-base.js";

module.exports = {
  content: [
    "./stories/**/*.stories.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./RadioButton/**/*.{js,jsx,ts,tsx,mdx}"
    ,
  ],
  presets: [tailwindBaseLottus.default, tailwindBase.default],
  theme: {},
  plugins: [],
}
