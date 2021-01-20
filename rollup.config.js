import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: './src/index.js',
  output: {
    file: './dist/cheerio-bundled.js',
    format: 'cjs',
    name: 'cheerioBundle',
    exports: 'named'
  },
  plugins: [
    json(),
    resolve({
      preferBuiltins: true
    }),
    commonjs(),
  ]
}
