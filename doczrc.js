import { css } from 'docz-plugin-css';
import postcssConfig from './postcss.config';

export default {
  title: 'Betomic',
  codeSandbox: false,
  typescript: true,
  plugins: [
    css({ preprocessor: 'postcss', loaderOpts: postcssConfig }),
  ],
  wrapper: 'docs/wrapper.tsx',
  modifyBundlerConfig: (config) => {
    // Adding custom-rules for `.pcss` and `.module.pcss` files using the `poscss-loader`
    config.module.rules.push({ test: /\.pcss$/, use: ['postcss-loader'] });
    config.module.rules.push({ test: /\.module.pcss$/, use: ['postcss-loader'] });
    return config;
  },
};
