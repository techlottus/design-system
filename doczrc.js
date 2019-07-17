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
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'
      },
      {
        rel:'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,900|Rubik:300,400,500,700,900&display=swap'
      }
    ]
  }}
};
