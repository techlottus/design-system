/** @type {import('tailwindcss').Config} */
import * as tailwindBaseLottus from "./tenants/LOTTUS/tailwindBase"
import * as tailwindBase from "@lottuseducation/tailwind-base/lib/tailwind-base.js";

module.exports = {
  content: [
    "./stories/**/*.stories.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./RadioButton/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  safelist: [{ pattern: /[a-z][0-9]\:\-/ }],
  presets: [tailwindBaseLottus.default, tailwindBase.default],
  theme: {},
  plugins: [],
};