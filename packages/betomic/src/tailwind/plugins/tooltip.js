const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, theme }) {
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