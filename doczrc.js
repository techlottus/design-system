import { css } from 'docz-plugin-css';
import postcssConfig from './postcss.config';

export default {
  title: 'Betomic',
  codeSandbox: false,
  typescript: true,
  plugins: [
    css({ preprocessor: 'postcss', loaderOpts: postcssConfig }),
  ],
  themeConfig: {
    mode: 'dark',
  },
  wrapper: 'docs/wrapper.tsx',
  modifyBundlerConfig: (config) => {
    // Adding custom-rules for `.pcss` and `.module.pcss` files using the `poscss-loader` with support
    // for `style-loader` and `css-loader`.
    config.module.rules.push({ test: /(\.module)?\.pcss$/, use: ['style-loader', {
      loader: 'css-loader',
      options: {
        modules: true,
      },
    }, 'postcss-loader'] });
    return config;
  },
};
