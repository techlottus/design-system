export default {
  contents: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      principal: [
        "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;800&display=swap",
      ],
      secondary: [
        "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap",
      ],
      icons: [
        "https://fonts.googleapis.com/css?family=Material+Icons%7CMaterial+Icons+Outlined%7CMaterial+Icons+Two+Tone%7CMaterial+Icons+Round%7CMaterial+Icons+Sharp",
      ],
      "icons-outlined": ["Material Icons Outlined"],
      "icons-solid": ["Material Icons"],
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
      height: {
        "9/10": "90%",
      },
      width: {
        "22.5": "90px",
      },
      padding: {
        "24.75": "99px",
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
