const plugin = require("tailwindcss/plugin");

module.exports = plugin(function({ addBase }) {
  addBase({
    ".drawer-open": {
      overflow: "hidden",
      paddingRight: "15px",
    }
  })
});
