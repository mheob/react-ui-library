module.exports = {
  printWidth: 100,
  proseWrap: 'always',
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.md',
      options: {
        parser: 'markdown',
      },
    },
  ],
}
