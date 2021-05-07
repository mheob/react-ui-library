module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          node: '14',
          browsers: ['last 2 versions'],
        },
      },
    ],
  ],
  plugins: [
    // The `loose` option fixes output warnings of storybook
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
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
  ],
}
