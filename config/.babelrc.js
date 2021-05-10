module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
  ],
  plugins: [
    '@emotion',
    [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          // Use "transform: '@material-ui/core/${member}'," if your bundler does not support ES modules
          transform: '@material-ui/core/esm/${member}',
          preventFullImport: true,
        },
      },
    ],
    // The `loose` option fixes output warnings of storybook
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
}
