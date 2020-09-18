import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const config = [
  {
    input: 'src/index',
    output: {
      name: 'colour',
      file: 'dist/material.colour.js',
      format: 'umd',
    },
    plugins: [
      nodeResolve(),
    ],
  },
  {
    input: 'src/index',
    output: {
      name: 'colour',
      file: 'dist/material.colour.min.js',
      format: 'umd',
    },
    plugins: [
      nodeResolve(),
      terser(),
    ],
  },
];

export default config;