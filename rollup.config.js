import css from 'rollup-plugin-import-css';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';

import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: './src/app.js',
  output: {
   file: './build/bundle.min.js',
   format: 'iife',
   name: 'bundle'
},
  plugins: [
   css({
      output: "bundle.min.css",
      minify: true,
   }),
   image(),
   nodeResolve(),
   serve({
      open: true
   }),
   livereload()
],
};
