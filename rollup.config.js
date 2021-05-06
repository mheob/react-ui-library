import fs from 'fs'

import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

const pkg = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }))

export default {
  input: 'components/index.ts',
  external: ['react', '@material-ui/core', 'styled-components'],
  plugins: [
    typescript({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    nodeResolve({ browser: true }),
    terser(),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
}
