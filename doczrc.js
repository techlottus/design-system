import { css } from 'docz-plugin-css';
import postcssConfig from './postcss.config';

export default {
  title: "Betomic",
  codeSandbox: false,
  typescript: true,
  plugins: [
    css({
      preprocessor: 'postcss',
      loaderOpts: postcssConfig
    })
  ],
  wrapper: 'docs/wrapper',
};
