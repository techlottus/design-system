import Drawer from "./plugins/drawer";
import Navigation from "./plugins/navigation";
import Tooltip from "./plugins/tooltip";

export default {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './layouts/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      surface: {
        50: '#F1F6FA',
        100: '#E7EEF4',
        200: '#D2DEE4',
        300: '#B8C1C6',
        400: '#7A8288',
        500: '#384147',
        600: '#172126',
        700: '#141C20',
        800: '#0F1519',
        900: '#0A0F11',
        950: '#06080A'
      },
      primary: {
        50: '#FFEFEA',
        100: '#FFDFD4',
        200: '#FFBFA9',
        300: '#FF9F7F',
        400: '#FF7F54',
        500: '#FF5F29',
        600: '#CC4C21',
        700: '#993919',
        800: '#662610',
        900: '#331308',
        950: '#1A0904',
      },
      secondary: {
        50: '#E8E9E9',
        100: '#D1D3D4',
        200: '#A2A6A8',
        300: '#747A7D',
        400: '#454D51',
        500: '#172126',
        600: '#121A1E',
        700: '#0E1417',
        800: '#090D0F',
        900: '#050708',
        950: '#020304',
      },
      success: {
        DEFAULT: '#20B25B',
        100: '#A5E6BF',
        200: '#78D99F',
        300: '#4BCD7F',
        400: '#1FC160',
        500: '#20B25B',
        600: '#22A456',
        700: '#149247',
        800: '#096930',
      },
      info: {
        DEFAULT: '#05C1E7',
        100: '#99EDFD',
        200: '#66E4FD',
        300: '#33DBFC',
        400: '#00D2FC',
        500: '#05C1E7',
        600: '#0AB2D3',
        700: '#029AB8',
        800: '#035F86'
      },
      warning: {
        DEFAULT: '#EAB509',
        100: '#FFE79B',
        200: '#FFDB69',
        300: '#FFCF37',
        400: '#FFCA1E',
        500: '#EAB509',
        600: '#D6A60E',
        700: '#AC7305',
        800: '#613305'
      },
      error: {
        DEFAULT: '#C93148',
        100: '#FAA8AE',
        200: '#F77D86',
        300: '#F5525E',
        400: '#DB324B',
        500: '#C93148',
        600: '#B93246',
        700: '#B4263B',
        800: '#A31228'
      },
    },
    fontFamily: {
      'display': ['Montserrat', 'sans-serif'],
      'base': ['Rubik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    Drawer,
    Navigation,
    Tooltip,
  ],
};