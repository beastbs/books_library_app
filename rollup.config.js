import css from 'rollup-plugin-import-css';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import {liveServer} from 'rollup-plugin-live-server';

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
   nodeResolve(),
   liveServer({
      port: 8001,
      open: true,
   })
],
};
