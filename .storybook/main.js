const path = require('path')

const emotionReactPath = path.dirname(require.resolve('@emotion/react/package.json'))
const emotionStyledPath = path.dirname(require.resolve('@emotion/styled/package.json'))

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
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': emotionReactPath,
          '@emotion/styled': emotionStyledPath,
          'emotion-theming': emotionReactPath,
        },
      },
    }
  },
}
