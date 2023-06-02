const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addBase }) => {
  addBase({
    ':root': {
      '--primary-color-50': '#FFEFEA',
      '--primary-color-100': '#FFDFD4',
      '--primary-color-200': '#FFBFA9',
      '--primary-color-300': '#FF9F7F',
      '--primary-color-400': '#FF7F54',
      '--primary-color-500': '#FF5F29',
      '--primary-color-600': '#CC4C21',
      '--primary-color-700': '#993919',
      '--primary-color-800': '#662610',
      '--primary-color-900': '#331308',
      '--primary-color-950': '#1A0904',
      '--secondary-color-50': '#E8E9E9',
      '--secondary-color-100': '#D1D3D4',
      '--secondary-color-200': '#A2A6A8',
      '--secondary-color-300': '#747A7D',
      '--secondary-color-400': '#454D51',
      '--secondary-color-500': '#172126',
      '--secondary-color-600': '#121A1E',
      '--secondary-color-700': '#0E1417',
      '--secondary-color-800': '#090D0F',
      '--secondary-color-900': '#050708',
      '--secondary-color-950': '#020304',
    }
  })
})