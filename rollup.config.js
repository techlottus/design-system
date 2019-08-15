import TypescriptPlugin from 'rollup-plugin-typescript2';
import PostCssPlugin from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const config = [
  // ESM build to be used with webpack/rollup.
  {
    input: 'packages/index.ts',
    output: {
      file: 'dist/betomic.esm.js',
      format: 'esm',
    },
    external: [
      'react',
      'react-dom',
      '@glidejs/glide',
    ],
    plugins: [
      TypescriptPlugin(),
      PostCssPlugin({
        extract: false,
        inject: false,
      }),
    ],
  },
  // CommonJs
  {
    input: 'packages/index.ts',
    output: {
      file: 'dist/betomic.cjs.js',
      format: 'cjs',
    },
    external: [
      'react',
      'react-dom',
      '@glidejs/glide',
    ],
    plugins: [
      TypescriptPlugin(),
      PostCssPlugin({
        extract: false,
        inject: false,
      }),
    ],
  },
  // Browser build
  {
    input: 'packages/index.ts',
    output: {
      file: 'dist/betomic.js',
      format: 'iife',
      name: 'Betomic',
      globals: {
        'react': 'React',
        '@glidejs/glide': 'Glide',
      },
    },
    external: [
      'react',
      'react-dom',
      '@glidejs/glide',
    ],
    plugins: [
      TypescriptPlugin(),
      PostCssPlugin({ extract: true }),
      terser(),
    ],
  },
]

export default config;
