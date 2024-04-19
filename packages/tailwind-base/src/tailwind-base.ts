export default {
  contents: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      principal: ["Nunito Sans"],
      secondary: ["poppins"],
      icons: ["Material Icons"],
    },
    colors: {
      primary: {
        100: "#fff3f2",
        200: "#ace2db",
        300: "#67bab1",
        400: "#47a398",
        500: "#2b897e",
        600: "#177065",
        700: "#0a5048",
      },
      secondary: {
        100: "#dda6a7",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "",
      },

      neutral: {
        100: "#fff",
        200: "#f2f2f2",
        300: "#e6e6e6",
        400: "#cdcdcd",
        500: "#9a9a9a",
        600: "#686868",
        700: "#818181",
        800: "#282828",
        900: "#000",
      },
      outstanding: {
        100: "#66CBBF",
        200: "#DD7265",
        300: "#F2BB43",
        400: "#A1203E",
        500: "",
      },
      success: { 100: "", 200: "", 300: "", 400: "", 500: "" },
    },
    extend: {
      boxShadow: {
        lb: "4px 6px 0px 0px rgba(0, 0, 0, 1)",
      },
    },
  },
  variants: {
    extend: {
      fill: ["dark"],
    },
  },
  plugins: [],
};
