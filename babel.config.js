const BABEL_ENV = process.env.BABEL_ENV

module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: BABEL_ENV === 'cjs' ? 'commonjs' : false,
        targets: {
          esmodules: BABEL_ENV === 'esm' ? true : undefined,
        },
      },
    ],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
  ]

  const plugins = [
    '@emotion',
    // i: The `loose` option fixes output warnings of storybook
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ]

  return {
    presets,
    plugins,
  }
}
