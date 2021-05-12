module.exports = {
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: { parser: 'json' },
    },
    {
      files: '*.md',
      options: { parser: 'md' },
    },
    {
      files: '*.{yaml,yml}',
      options: { parser: 'yaml' },
    },
  ],
}
