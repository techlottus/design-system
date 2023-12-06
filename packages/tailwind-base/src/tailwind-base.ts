export default {
  theme: {
    extend: {
      "fontFamily": {
        "icons-solid": ["Material Icons"],
        "icons-outlined": ["material-icons-outlined"],
      },
      "screens": {
        "mobile": {
          "max": "599px"
        },
        "tablet": {
          "min": "600px",
          "max": "1023px"
        },
        "desktop": {
          "min": "1024px"
        },
      }
      ,
      "fontSize": {
        "xs": ["0.75rem", "125%"],
        "sm": ["0.875rem", "125%"],
        "base": ["1rem", "125%"],
        "lg": ["1.125rem", "125%"],
        "xl": ["1.25rem", "125%"],
        "2xl": ["1.5rem", "125%"],
        "3xl": ["1.75rem", "125%"],
        "4xl": ["2rem", "125%"],
        "5xl": ["2.125rem", "125%"],
        "6xl": ["2.5rem", "125%"],
        "7xl": ["3.25rem", "125%"],
        "8xl": ["3.875rem", "125%"]
      },
      "aspectRatio": {
        "1/1": "1 / 1",
        "1/2": "1 / 2",
        "2/1": "2 / 1",
        "3/4": "3 / 4",
        "4/3": "4 / 3",
        "7/2": "7 / 2"
      },
      "boxShadow": {
        "r-sm": "0px 2px 12px rgba(0,0,0,0.12)",
        "r-md": "0px 5px 15px rgba(0, 0, 0, 0.15)",
        "r-lg": "0px 10px 30px rgba(0, 0, 0, 0.15)",
        "r-xl": "0px 30px 60px rgba(0, 0, 0, 0.15)",
        "r-solid": "4px 6px 0px 0px rgba(0, 0, 0, 1)",
        "l-sm": "0px 2px 12px rgba(0,0,0,0.12)",
        "l-md": "0px 5px 15px rgba(0, 0, 0, 0.15)",
        "l-lg": "0px 10px 30px rgba(0, 0, 0, 0.15)",
        "l-xl": "0px 30px 60px rgba(0, 0, 0, 0.15)",
        "l-solid": "4px 6px 0px 0px rgba(0, 0, 0, 1)",
      },
    }
  },
  plugins: [],
}