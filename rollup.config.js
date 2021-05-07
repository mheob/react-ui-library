import path from 'path'

import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

import packageJson from './package.json'

// The regex removes a starting scope (e.g. `@mheob/`)
// and convert the string from kebab-case to camelCase
const moduleName = packageJson.name.replace(/^@.*\//, '').replace(/-./g, (s) => s.toUpperCase()[1])
const inputFileName = 'src/components/index.ts'
const extensions = ['.js', '.jsx', '.ts', '.tsx']

const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.devDependencies || {}),
]

const plugins = [
  typescript(),
  commonjs({
    extensions,
  }),
  babel({
    babelHelpers: 'bundled',
    configFile: path.resolve(__dirname, '.babelrc.js'),
  }),
  nodeResolve({
    browser: true,
  }),
  terser(),
]

export default [
  {
    input: inputFileName,
    output: {
      name: moduleName,
      file: packageJson.browser,
      format: 'iife',
      sourcemap: true,
    },
    plugins,
  },
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
