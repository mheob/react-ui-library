import path from 'path'

import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'

import packageJson from './package.json'

const inputFileName = 'src/components/index.ts'

const external = Object.keys(packageJson.devDependencies || {})

const plugins = [
  typescript(),
  commonjs({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
  babel({
    babelHelpers: 'bundled',
    configFile: path.resolve(__dirname, 'config', '.babelrc.js'),
  }),
  nodeResolve({ browser: true }),
  terser(),
  filesize({ showMinifiedSize: false }),
]

export default [
  {
    input: inputFileName,
    output: {
      file: packageJson.module,
      format: 'es',
      sourcemap: true,
    },
    external,
    plugins,
  },
  {
    input: inputFileName,
    output: {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    external,
    plugins,
  },
]
