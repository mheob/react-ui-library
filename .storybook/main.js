const configOverwrites = require('./webpack.config')

module.exports = {
  stories: [
    '../packages/**/stories/*.stories.mdx',
    '../packages/**/stories/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  // i: Overwriting webpack is only a workaround to get `Emotion` running
  webpackFinal: async (config) => ({
    ...config,
    resolve: { ...config.resolve, alias: configOverwrites.resolve.alias },
  }),
}
