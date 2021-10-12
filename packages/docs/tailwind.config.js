const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [
      "./pages/**/*.{js,ts,tsx,mdx}",
      "./components/**/*.{js,ts,tsx}",
      "../../node_modules/@exponentialeducation/betomic/src/**/*.{js,ts,tsx}",
      "../../node_modules/@exponentialeducation/datetime/src/**/*.{js,ts,tsx}",
      "../../node_modules/@exponentialeducation/tooltip/src/**/*.{js,ts,tsx}",
      "../../node_modules/@exponentialeducation/toast/src/**/*.{js,ts,tsx}"
  ],
  darkMode: "class", // or "media" or "class"
  theme: {
    extend: {
      boxShadow: {
        sm: "0px 2px 8px rgba(15, 21, 25, 0.12)",
        DEFAULT: "0px 4px 12px rgba(15, 21, 25, 0.12)",
        md: "0px 8px 16px rgba(15, 21, 25, 0.12)",
        lg: "0px 12px 24px 4px rgba(15, 21, 25, 0.12)",
        xl: "0px 16px 28px 8px rgba(15, 21, 25, 0.12)",
        '2xl': "0px 24px 32px 12px rgba(15, 21, 25, 0.12)",
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      maxWidth: {
        "68": "272px",
        "110": "440px"
      },
      maxHeight: {
        "78": "312px",
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "rubik": ["Rubik", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: {
          DEFAULT: "#FFFFFF",
          "10": "rgba(255, 255, 255, 0.1)"
        },
        black: "#000000",
        surface: {
          "50": "#F1F6FA",
          "100": "#E7EEF4",
          "200": "#D2DEE4",
          "300": "#B8C1C6",
          "400": "#7A8288",
          "500": "#384147",
          "600": "#172126",
          "700": "#141C20",
          "800": "#0F1519",
          "900": "#0A0F11",
          "950": "#06080A"
        },
        primary: {
          "50": "#FFEFEA",
          "100": "#FFDFD4",
          "200": "#FFBFA9",
          "300": "#FF9F7F",
          "400": "#FF7F54",
          "500": "#FF5F29",
          "600": "#CC4C21",
          "700": "#993919",
          "800": "#662610",
          "900": "#331308",
          "950": "#1A0904",
        },
        secondary: {
          "50": "#E8E9E9",
          "100": "#D1D3D4",
          "200": "#A2A6A8",
          "300": "#747A7D",
          "400": "#454D51",
          "500": "#172126",
          "600": "#121A1E",
          "700": "#0E1417",
          "800": "#090D0F",
          "900": "#050708",
          "950": "#020304",
        },
        success: {
          DEFAULT: "#20B25B",
          "100": "#A5E6BF",
          "200": "#78D99F",
          "300": "#4BCD7F",
          "400": "#1FC160",
          "500": "#20B25B",
          "600": "#22A456",
          "700": "#149247",
          "800": "#096930",
        },
        info: {
          DEFAULT: "#05C1E7",
          "100": "#99EDFD",
          "200": "#66E4FD",
          "300": "#33DBFC",
          "400": "#00D2FC",
          "500": "#05C1E7",
          "600": "#0AB2D3",
          "700": "#029AB8",
          "800": "#035F86"
        },
        warning: {
          DEFAULT: "#EAB509",
          "100": "#FFE79B",
          "200": "#FFDB69",
          "300": "#FFCF37",
          "400": "#FFCA1E",
          "500": "#EAB509",
          "600": "#D6A60E",
          "700": "#AC7305",
          "800": "#613305"
        },
        error: {
          DEFAULT: "#C93148",
          "100": "#FAA8AE",
          "200": "#F77D86",
          "300": "#F5525E",
          "400": "#DB324B",
          "500": "#C93148",
          "600": "#B93246",
          "700": "#B4263B",
          "800": "#A31228"
        },
      },
      spacing: {
        "17": "4.25rem",
        "18": "4.5rem",
        "65": "16.25rem",
        "49": "12.25rem",
        "30": "7.5rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("./plugins/fonts"),
    plugin(function({ addBase, theme }) {
      addBase({
        ".navigation-header": {
          "ul": {
            "li": {
              "a, button": {
                position: "relative",
                "&.active": {
                  color: theme("colors.primary.500"),
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    display: "block",
                    height: theme("spacing.1"),
                    borderRadius: theme("spacing.1"),
                    width: "100%",
                    backgroundColor: theme("colors.primary.500"),
                    paddingLeft: theme("spacing.2"),
                    paddingRight: theme("spacing.2")
                  },
                  "&:hover": {
                    color: theme("colors.primary.500"),
                    "&::after": {
                      backgroundColor: theme("colors.primary.500")
                    }
                  },
                },
                "&:hover": {
                  color: theme("colors.surface.600"),
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    display: "block",
                    height: theme("spacing.1"),
                    borderRadius: theme("spacing.1"),
                    width: "100%",
                    paddingLeft: theme("spacing.2"),
                    paddingRight: theme("spacing.2"),
                    backgroundColor: theme("colors.surface.100")
                  }
                }
              }
            }
          }
        },

        ".navigation-header.dark": {
          backgroundColor: theme("colors.surface.800"),
          "ul": {
            "li": {
              "a, button": {
                color: theme("colors.white.DEFAULT"),
                "&.active": {
                  color: theme("colors.primary.500"),
                  "&::after": {
                    backgroundColor: theme("colors.primary.500"),
                  },
                  "&:hover": {
                    color: theme("colors.primary.500"),
                    "&::after": {
                      backgroundColor: theme("colors.primary.500")
                    }
                  },
                },
                "&:hover": {
                  color: theme("colors.white.DEFAULT"),
                  "&::after": {
                    backgroundColor: theme("colors.surface.500")
                  }
                }
              }
            }
          }
        },
      })
    }),
    plugin(function({ addUtilities }) {
      const filterUtilities = {
        ".grid p:not(:first-child), .grid p": {
          margin: 0,
        },
      }

      addUtilities(filterUtilities, ["responsive", "hover"])
    }),
    plugin(function({ addBase, theme }) {
      addBase({
        ".drawer-open": {
          overflow: "hidden",
          paddingRight: "15px",
        }
      })
    }),
    plugin(function({ addBase, theme }) {
      addBase({
        table: {
          width: theme("width.full"),
        },
        ".nextra-container nav": {
          boxShadow: "none !important"
        },
        "table tbody tr:nth-child(2n)": {
          backgroundColor: "inherit"
        },
        ".dark table tbody tr:nth-child(2n)": {
          backgroundColor: "#111111"
        },
        "table thead": {
          backgroundColor: "#f7fafc"
        },
        ".dark table thead": {
          backgroundColor: "#1a202c"
        },
      })
    }),
    plugin(function({ addBase, theme }) {
      addBase({
        ".tooltip": {
          "&:after": {
            content: "' '",
            position: "absolute",
            borderWidth: "8px",
            borderStyle: "solid",
            color: theme('colors.surface.600'),
          },
          "&.arrow-left": {
            "&:after": {
              top: "50%",
              left: "100%",
              marginTop: "-8px",
              borderColor: "transparent transparent transparent currentColor",
            }
          },
          "&.arrow-left-start": {
            "&:after": {
              top: 0,
              left: "100%",
              marginTop: "16px",
              borderColor: "transparent transparent transparent currentColor",
            }
          },
          "&.arrow-left-end": {
            "&:after": {
              bottom: 0,
              left: "100%",
              marginBottom: "16px",
              borderColor: "transparent transparent transparent currentColor",
            }
          },
          "&.arrow-right": {
            "&:after": {
              top: "50%",
              right: "100%",
              marginTop: "-8px",
              borderColor: "transparent currentColor transparent transparent",
            }
          },
          "&.arrow-right-start": {
            "&:after": {
              top: 0,
              right: "100%",
              marginTop: "16px",
              borderColor: "transparent currentColor transparent transparent",
            }
          },
          "&.arrow-right-end": {
            "&:after": {
              bottom: 0,
              right: "100%",
              marginBottom: "16px",
              borderColor: "transparent currentColor transparent transparent",
            }
          },
          "&.arrow-bottom": {
            "&:after": {
              left: "50%",
              bottom: "100%",
              marginTop: "-8px",
              marginLeft: "-4px",
              borderColor: "transparent transparent currentColor transparent",
            }
          },
          "&.arrow-bottom-start": {
            "&:after": {
              left: 0,
              bottom: "100%",
              marginLeft: "16px",
              borderColor: "transparent transparent currentColor transparent",
            }
          },
          "&.arrow-bottom-end": {
            "&:after": {
              right: 0,
              bottom: "100%",
              marginRight: "16px",
              borderColor: "transparent transparent currentColor transparent",
            }
          },
          "&.arrow-top": {
            "&:after": {
              left: "50%",
              top: "100%",
              marginLeft: "-4px",
              borderColor: "currentColor transparent transparent transparent",
            }
          },
          "&.arrow-top-start": {
            "&:after": {
              left: 0,
              top: "100%",
              marginLeft: "16px",
              borderColor: "currentColor transparent transparent transparent",
            }
          },
          "&.arrow-top-end": {
            "&:after": {
              right: 0,
              top: "100%",
              marginRight: "16px",
              borderColor: "currentColor transparent transparent transparent",
            }
          },
        }
      })
    })
  ],
};
