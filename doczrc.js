import { css } from 'docz-plugin-css';
import postcssConfig from './postcss.config';

export default {
  title: 'Betomic',
  codeSandbox: false,
  typescript: true,
  filterComponents: (files) =>
    files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://cdn-bedu.netlify.com/style.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,900|Rubik:300,400,500,700,900&display=swap'
        }
      ]
    }
  },
  plugins: [
    css({ preprocessor: 'postcss', loaderOpts: postcssConfig }),
  ],
  wrapper: 'docs/wrapper.tsx',
  modifyBundlerConfig: (config) => {
    // Adding custom-rules for `.pcss` and `.module.pcss` files using the `poscss-loader` with support
    // for `style-loader` and `css-loader`.
    config.module.rules.push({
      test: /(\.module)?\.pcss$/, use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      }, 'postcss-loader']
    });
    return config;
  },
};
