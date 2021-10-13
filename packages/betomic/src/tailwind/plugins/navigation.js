const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, theme }) {
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
});