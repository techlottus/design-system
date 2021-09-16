const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,tsx,mdx}',
    './components/**/*.{js,ts,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const filterUtilities = {
        '.grid p:not(:first-child), .grid p': {
          margin: 0,
        },
      }

      addUtilities(filterUtilities, ['responsive', 'hover'])
    }),
  ],
};
