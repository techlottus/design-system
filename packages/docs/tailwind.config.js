const plugin = require('tailwindcss/plugin');

const nextraTheme = {
  presets: [
    require('@exponentialeducation/tailwind-base').default,
  ],
  purge: {
    content: [
      './pages/**/*.{js,ts,tsx,mdx}',
      './components/**/*.{js,ts,tsx}',
      '../../node_modules/@exponentialeducation/betomic/src/**/*.{js,ts,tsx}',
      '../../node_modules/@exponentialeducation/datetime/src/**/*.{js,ts,tsx}',
      '../../node_modules/@exponentialeducation/tooltip/src/**/*.{js,ts,tsx}',
      '../../node_modules/@exponentialeducation/toast/src/**/*.{js,ts,tsx}'
    ],
    options: {
      safelist: [
        'nextra-container'
      ]
    }
  },
  theme: {},
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [
    require('./plugins/fonts'),
    plugin(function({ addUtilities }) {
      const filterUtilities = {
        '.grid p:not(:first-child), .grid p': {
          margin: 0,
        },
      }

      addUtilities(filterUtilities, ['responsive', 'hover'])
    }),
    plugin(function({ addBase, theme }) {
      addBase({
        table: {
          width: theme('width.full'),
        },
        '.nextra-container': {
          'nav': {
            boxShadow: 'none !important'
          }
        },
        'table tbody tr:nth-child(2n)': {
          backgroundColor: 'inherit'
        },
        '.dark table tbody tr:nth-child(2n)': {
          backgroundColor: '#111111'
        },
        'table thead': {
          backgroundColor: '#f7fafc'
        },
        '.dark table thead': {
          backgroundColor: '#1a202c'
        },
      })
    }),
  ],
};

module.exports = nextraTheme;
