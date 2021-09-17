const plugin = require('tailwindcss/plugin');

const fonts = ({ addBase }) => {
  addBase([
    {
      '@font-face': {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '300',
        fontDisplay: 'swap',
        src: 'url("/fonts/rubik.woff2") format("woff2")',
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
      }
    },
    {
      '@font-face': {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '400',
        fontDisplay: 'swap',
        src: 'url("/fonts/rubik.woff2") format("woff2")',
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
      }
    },
    {
      '@font-face': {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '500',
        fontDisplay: 'swap',
        src: 'url("/fonts/rubik.woff2") format("woff2")',
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
      }
    },
    {
      '@font-face': {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '700',
        fontDisplay: 'swap',
        src: 'url("/fonts/rubik.woff2") format("woff2")',
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
      }
    },
    {
      '@font-face': {
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: '900',
        fontDisplay: 'swap',
        src: 'url("/fonts/rubik.woff2") format("woff2")',
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
      }
    },
    {
      '@font-face': {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '200',
        fontDisplay: 'swap',
        src: 'url("/fonts/montserrat-200.woff2") format("woff2")',
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
      }
    },
    {
      '@font-face': {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '300',
        fontDisplay: 'swap',
        src: 'url("/fonts/montserrat-300.woff2") format("woff2")',
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
      }
    },
    {
      '@font-face': {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '400',
        fontDisplay: 'swap',
        src: 'url("/fonts/montserrat-400.woff2") format("woff2")',
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
      }
    },
    {
      '@font-face': {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '700',
        fontDisplay: 'swap',
        src: 'url("/fonts/montserrat-700.woff2") format("woff2")',
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
      }
    },
    {
      '@font-face': {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '900',
        fontDisplay: 'swap',
        src: 'url("/fonts/montserrat-900.woff2") format("woff2")',
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
      }
    },
  ])
}

module.exports = plugin(fonts);
