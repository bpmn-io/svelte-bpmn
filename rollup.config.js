import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: pkg.svelte,
  output: [
    { file: pkg.module, 'format': 'es' },
    { file: pkg.main, 'format': 'umd', name: pkg.name }
  ],
  plugins: [
    svelte(),
    resolve({
      browser: true
    }),
    commonjs(),
    terser()
  ]
};