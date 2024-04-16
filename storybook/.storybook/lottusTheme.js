import { create } from '@storybook/theming/create';
import { logo } from '../tenants/LOTTUS/multitenant-images';
import "tailwindcss/tailwind.css";
import "../index.css";

export default create({

  base: 'light',
  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Design System Storybook',
  brandUrl: '/',
  brandImage: logo,
  brandTarget: '_self',

  //
  colorPrimary: '#00a994',
  colorSecondary: '#13294b',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#ced4de',
  appBorderRadius: 4,

  // Text colors
  textColor: '#71717A',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#00554a',
  barSelectedColor: '#1cffe3',
  barBg: '#00a994',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#00a994',
  inputTextColor: '#71717A',
  inputBorderRadius: 2,
});